/**
 * Liste d'idées de loisirs par période (Été 2026, Hiver 2026-2027, ...).
 *
 * Mise en page attendue dans la feuille : une paire de colonnes par période,
 * "Texte du loisir" puis juste à droite "Fait ?" (case à cocher), avec les
 * en-têtes en ligne 1. Exemple :
 *
 *      A                B        C                  D
 *   1  Été 2026         Fait ?   Hiver 2026-2027     Fait ?
 *   2  (ligne d'ajout — toujours vide)
 *   3  Rando en montagne  ☐      Marché de Noël        ☐
 *   4  Baignade au lac    ☐      Ski de fond            ☐
 *
 * Les périodes ne sont PAS déclarées dans le script : il repère tout seul,
 * dans la ligne d'en-têtes, chaque colonne dont le titre vaut exactement
 * "Fait ?" (voir CHECKBOX_HEADER) — la colonne juste à sa gauche est alors
 * traitée comme la liste de loisirs de cette période.
 *
 * Ajouter une nouvelle période directement dans le Sheet :
 * 1. Ajouter deux nouvelles colonnes à droite des colonnes existantes.
 * 2. Taper le nom de la période dans la première (ex. "Vacances mars 2027")
 *    et "Fait ?" dans la seconde, en ligne 1.
 * 3. C'est tout : dès que tu valides l'en-tête "Fait ?", la mise en forme
 *    barrée s'installe automatiquement sur la colonne.
 *
 * Ajouter un loisir : la ligne 2 de chaque colonne de texte est une case
 * d'ajout, toujours vide. Tape un loisir dedans et valide (Entrée) -> il
 * rejoint aussitôt le haut de la liste des loisirs non cochés (juste
 * ligne 3), la ligne 2 redevient vide et le curseur y revient
 * automatiquement : tu peux enchaîner les ajouts en tapant puis Entrée,
 * sans souris ni flèches.
 *
 * Cases à cocher : une case n'apparaît que sur une ligne de la liste (à
 * partir de la ligne 3) qui contient un loisir. Si tu effaces le texte
 * d'un loisir existant, sa case disparaît et la liste se compacte
 * automatiquement (plus aucun trou ni case orpheline).
 *
 * Installation initiale :
 * 1. Ouvrir le Google Sheet -> Extensions -> Apps Script.
 * 2. Coller ce fichier (remplacer le contenu de Code.gs, ou l'ajouter tel quel).
 * 3. Adapter SHEET_NAME ci-dessous si ton onglet ne s'appelle pas "Loisirs".
 * 4. Enregistrer. Aucun déclencheur manuel à créer, onEdit(e) est appelé
 *    automatiquement par Google Sheets à chaque modification.
 * 5. Si des périodes et/ou des loisirs existent déjà dans la feuille au
 *    moment de coller le script, sélectionner "setupAllPeriods" dans le
 *    menu déroulant en haut de l'éditeur et cliquer sur Exécuter (une
 *    seule fois) pour tout initialiser d'un coup (ça libère aussi
 *    automatiquement la ligne 2 comme ligne d'ajout si elle contenait
 *    déjà un loisir, en décalant le reste vers le bas).
 *
 * Comportement des coches : quand tu coches un loisir, son texte devient
 * barré et la ligne se déplace juste sous les loisirs non cochés (et
 * au-dessus des loisirs déjà cochés). Décocher fait l'inverse : la ligne
 * revient tout en bas du groupe des non-cochés.
 */

const SHEET_NAME = 'Loisirs';
const HEADER_ROW = 1;
const INPUT_ROW = 2;
const FIRST_LIST_ROW = INPUT_ROW + 1;
const CHECKBOX_HEADER = 'Fait ?';

function onEdit(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== SHEET_NAME) return;
  if (e.range.getNumRows() !== 1 || e.range.getNumColumns() !== 1) return;

  const editedRow = e.range.getRow();
  const editedCol = e.range.getColumn();

  if (editedRow === HEADER_ROW) {
    const value = String(e.range.getValue()).trim();
    if (value === CHECKBOX_HEADER && editedCol >= 2) {
      const period = { textCol: editedCol - 1, checkCol: editedCol };
      ensureConditionalFormatting(sheet, period);
      sheet.getRange(INPUT_ROW, period.checkCol).clearDataValidations().clearContent();
    }
    return;
  }

  const periods = getPeriods(sheet);

  if (editedRow === INPUT_ROW) {
    const period = periods.find((p) => p.textCol === editedCol);
    if (!period) return;
    const newText = String(e.range.getValue()).trim();
    if (newText !== '') addNewItem(sheet, period, newText);
    return;
  }

  if (editedRow < FIRST_LIST_ROW) return;

  const checkPeriod = periods.find((p) => p.checkCol === editedCol);
  if (checkPeriod) {
    syncPeriod(sheet, checkPeriod, editedRow, true);
    return;
  }

  const textPeriod = periods.find((p) => p.textCol === editedCol);
  if (textPeriod) {
    syncPeriod(sheet, textPeriod, editedRow, false);
  }
}

/**
 * Détecte les périodes directement depuis la ligne d'en-têtes : toute
 * colonne titrée "Fait ?" désigne une case à cocher, la colonne juste à
 * gauche porte le texte des loisirs de cette période.
 */
function getPeriods(sheet) {
  const lastCol = sheet.getLastColumn();
  if (lastCol < 2) return [];

  const headers = sheet.getRange(HEADER_ROW, 1, 1, lastCol).getValues()[0];
  const periods = [];
  for (let col = 2; col <= lastCol; col++) {
    const header = String(headers[col - 1]).trim();
    if (header === CHECKBOX_HEADER) {
      periods.push({
        name: String(headers[col - 2]).trim(),
        textCol: col - 1,
        checkCol: col,
      });
    }
  }
  return periods;
}

/**
 * Lit la liste actuelle d'une période (à partir de FIRST_LIST_ROW),
 * ignore les lignes sans texte.
 */
function readItems(sheet, period) {
  const lastRow = sheet.getLastRow();
  const numRows = lastRow - FIRST_LIST_ROW + 1;
  if (numRows <= 0) return [];

  const texts = sheet.getRange(FIRST_LIST_ROW, period.textCol, numRows, 1).getValues();
  const checks = sheet.getRange(FIRST_LIST_ROW, period.checkCol, numRows, 1).getValues();
  return texts
    .map((t, i) => ({ text: String(t[0]), checked: checks[i][0] === true }))
    .filter((it) => it.text.trim() !== '');
}

/**
 * Ajoute un loisir tapé dans la ligne d'ajout (ligne 2) : il rejoint le
 * haut du groupe des non-cochés, la ligne d'ajout redevient vide.
 */
function addNewItem(sheet, period, newText) {
  const existing = readItems(sheet, period);
  const ordered = [{ text: newText, checked: false }].concat(existing);

  sheet.getRange(INPUT_ROW, period.textCol).setValue('');
  sheet.getRange(INPUT_ROW, period.checkCol).clearDataValidations().clearContent();

  const lastRow = sheet.getLastRow();
  const numRows = Math.max(lastRow - FIRST_LIST_ROW + 1, ordered.length);
  applyOrdering(sheet, period, ordered, numRows);

  // Ramène le curseur sur la ligne d'ajout pour enchaîner sans souris/flèches.
  sheet.setActiveRange(sheet.getRange(INPUT_ROW, period.textCol));
}

/**
 * Recalcule l'état de la liste d'une période : compactée (pas de trous),
 * case à cocher uniquement sur les lignes ayant un loisir, et si l'édit
 * vient d'une case cochée/décochée, la ligne est replacée juste à la
 * frontière entre non-cochés et cochés.
 */
function syncPeriod(sheet, period, editedRow, isCheckboxEdit) {
  const lastRow = sheet.getLastRow();
  const numRows = lastRow - FIRST_LIST_ROW + 1;
  if (numRows <= 0) return;

  const texts = sheet.getRange(FIRST_LIST_ROW, period.textCol, numRows, 1).getValues();
  const checks = sheet.getRange(FIRST_LIST_ROW, period.checkCol, numRows, 1).getValues();

  const editedIdx = editedRow ? editedRow - FIRST_LIST_ROW : -1;
  const all = texts.map((t, i) => ({
    text: String(t[0]),
    checked: checks[i][0] === true,
    isEdited: i === editedIdx,
  }));

  const nonBlank = all.filter((it) => it.text.trim() !== '');

  let ordered = nonBlank;
  if (isCheckboxEdit) {
    const idx = nonBlank.findIndex((it) => it.isEdited);
    if (idx !== -1) {
      const [moved] = nonBlank.splice(idx, 1);
      // Frontière entre non-cochés et cochés : la ligne qui vient d'être
      // (dé)cochée y atterrit, qu'elle rejoigne le haut des cochés ou le
      // bas des non-cochés.
      const boundary = nonBlank.filter((it) => !it.checked).length;
      nonBlank.splice(boundary, 0, moved);
      ordered = nonBlank;
    }
  }

  applyOrdering(sheet, period, ordered, numRows);
}

/**
 * Écrit la liste réordonnée à partir de FIRST_LIST_ROW et (dés)installe
 * les cases à cocher : une case uniquement sur les lignes qui contiennent
 * effectivement un loisir.
 */
function applyOrdering(sheet, period, ordered, numRows) {
  if (ordered.length > 0) {
    sheet.getRange(FIRST_LIST_ROW, period.checkCol, ordered.length, 1).insertCheckboxes();
  }
  if (numRows > ordered.length) {
    sheet
      .getRange(FIRST_LIST_ROW + ordered.length, period.checkCol, numRows - ordered.length, 1)
      .clearDataValidations();
  }

  const texts = [];
  const checks = [];
  for (let i = 0; i < numRows; i++) {
    if (i < ordered.length) {
      texts.push([ordered[i].text]);
      checks.push([ordered[i].checked]);
    } else {
      texts.push(['']);
      checks.push(['']);
    }
  }
  sheet.getRange(FIRST_LIST_ROW, period.textCol, numRows, 1).setValues(texts);
  sheet.getRange(FIRST_LIST_ROW, period.checkCol, numRows, 1).setValues(checks);
}

/**
 * Installe la mise en forme barrée (texte grisé + barré quand la case est
 * cochée) pour une période, sur la zone de liste (à partir de
 * FIRST_LIST_ROW — la ligne d'ajout n'est jamais mise en forme).
 */
function ensureConditionalFormatting(sheet, period) {
  const maxRows = Math.max(sheet.getMaxRows(), 200);
  const textRange = sheet.getRange(FIRST_LIST_ROW, period.textCol, maxRows - FIRST_LIST_ROW + 1, 1);
  const checkColLetter = columnToLetter(period.checkCol);
  const formula = `=$${checkColLetter}${FIRST_LIST_ROW}=TRUE`;

  const rules = sheet
    .getConditionalFormatRules()
    .filter((rule) => !rule.getRanges().some((r) => r.getColumn() === period.textCol));
  const rule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(formula)
    .setStrikethrough(true)
    .setFontColor('#999999')
    .setRanges([textRange])
    .build();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
}

/**
 * Si la ligne d'ajout (ligne 2) contient encore un loisir d'avant la mise
 * à jour du script, décale tout le contenu de la période d'une ligne vers
 * le bas pour libérer la ligne 2 comme ligne d'ajout.
 */
function migratePeriodIfNeeded(sheet, period) {
  const inputText = String(sheet.getRange(INPUT_ROW, period.textCol).getValue()).trim();
  if (inputText === '') return;

  const lastRow = sheet.getLastRow();
  const numRows = lastRow - INPUT_ROW + 1;
  const textVals = sheet.getRange(INPUT_ROW, period.textCol, numRows, 1).getValues();
  const checkVals = sheet.getRange(INPUT_ROW, period.checkCol, numRows, 1).getValues();

  const shiftedTexts = [['']].concat(textVals.map((t) => [t[0]]));
  const shiftedChecks = [['']].concat(checkVals.map((c) => [c[0]]));

  sheet.getRange(INPUT_ROW, period.textCol, numRows + 1, 1).setValues(shiftedTexts);
  sheet.getRange(INPUT_ROW, period.checkCol, numRows + 1, 1).setValues(shiftedChecks);
}

/**
 * A exécuter une seule fois (menu déroulant Apps Script -> setupAllPeriods
 * -> Exécuter) pour initialiser d'un coup toutes les périodes déjà
 * présentes dans la feuille : libère la ligne 2 comme ligne d'ajout si
 * besoin, applique la mise en forme, compacte la liste et installe les
 * cases à cocher sur les lignes déjà remplies. Utile uniquement au
 * premier collage du script sur une feuille qui contient déjà des
 * données ; les nouvelles périodes et les nouveaux loisirs ajoutés
 * ensuite sont gérés automatiquement par onEdit.
 */
function setupAllPeriods() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Feuille "${SHEET_NAME}" introuvable. Vérifie SHEET_NAME.`);
  }
  getPeriods(sheet).forEach((period) => {
    migratePeriodIfNeeded(sheet, period);
    ensureConditionalFormatting(sheet, period);
    sheet.getRange(INPUT_ROW, period.checkCol).clearDataValidations();
    syncPeriod(sheet, period, null, false);
  });
}

function columnToLetter(column) {
  let letter = '';
  while (column > 0) {
    const remainder = (column - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    column = Math.floor((column - remainder) / 26);
  }
  return letter;
}
