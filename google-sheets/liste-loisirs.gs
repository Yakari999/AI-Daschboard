/**
 * Liste d'idées de loisirs par période (Été 2026, Hiver 2026-2027, ...).
 *
 * Mise en page attendue dans la feuille : une paire de colonnes par période,
 * "Texte du loisir" puis juste à droite "Fait ?" (case à cocher), avec les
 * en-têtes en ligne 1 et les loisirs à partir de la ligne 2. Exemple :
 *
 *      A                B        C                  D
 *   1  Été 2026         Fait ?   Hiver 2026-2027     Fait ?
 *   2  Rando en montagne  ☐      Marché de Noël        ☐
 *   3  Baignade au lac    ☐      Ski de fond            ☐
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
 * Cases à cocher : une case n'apparaît que sur une ligne où tu as écrit un
 * loisir. Tape un texte -> la case apparaît sur cette ligne. Efface le
 * texte -> la case disparaît et la liste se compacte automatiquement (plus
 * aucun trou ni case orpheline au milieu de la liste).
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
 *    seule fois) pour tout initialiser d'un coup.
 *
 * Comportement des coches : quand tu coches un loisir, son texte devient
 * barré et la ligne se déplace juste sous les loisirs non cochés (et
 * au-dessus des loisirs déjà cochés). Décocher fait l'inverse : la ligne
 * revient tout en bas du groupe des non-cochés.
 */

const SHEET_NAME = 'Loisirs';
const HEADER_ROW = 1;
const FIRST_DATA_ROW = HEADER_ROW + 1;
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
      syncPeriod(sheet, period, null, false);
    }
    return;
  }

  if (editedRow < FIRST_DATA_ROW) return;

  const periods = getPeriods(sheet);

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
 * Recalcule l'état d'une période : liste compactée (pas de trous), case à
 * cocher présente uniquement sur les lignes ayant un loisir, et si l'édit
 * vient d'une case cochée/décochée, la ligne est replacée juste à la
 * frontière entre non-cochés et cochés.
 */
function syncPeriod(sheet, period, editedRow, isCheckboxEdit) {
  const lastRow = sheet.getLastRow();
  const numRows = lastRow - FIRST_DATA_ROW + 1;
  if (numRows <= 0) return;

  const texts = sheet.getRange(FIRST_DATA_ROW, period.textCol, numRows, 1).getValues();
  const checks = sheet.getRange(FIRST_DATA_ROW, period.checkCol, numRows, 1).getValues();

  const editedIdx = editedRow ? editedRow - FIRST_DATA_ROW : -1;
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
 * Écrit la liste réordonnée et (dés)installe les cases à cocher : une case
 * uniquement sur les lignes qui contiennent effectivement un loisir.
 */
function applyOrdering(sheet, period, ordered, numRows) {
  if (ordered.length > 0) {
    sheet.getRange(FIRST_DATA_ROW, period.checkCol, ordered.length, 1).insertCheckboxes();
  }
  if (numRows > ordered.length) {
    sheet
      .getRange(FIRST_DATA_ROW + ordered.length, period.checkCol, numRows - ordered.length, 1)
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
  sheet.getRange(FIRST_DATA_ROW, period.textCol, numRows, 1).setValues(texts);
  sheet.getRange(FIRST_DATA_ROW, period.checkCol, numRows, 1).setValues(checks);
}

/**
 * Installe la mise en forme barrée (texte grisé + barré quand la case est
 * cochée) pour une période. Appelé automatiquement dès qu'un en-tête
 * "Fait ?" est tapé, ou à la main via setupAllPeriods().
 */
function ensureConditionalFormatting(sheet, period) {
  const maxRows = Math.max(sheet.getMaxRows(), 200);
  const textRange = sheet.getRange(FIRST_DATA_ROW, period.textCol, maxRows - FIRST_DATA_ROW + 1, 1);
  const checkColLetter = columnToLetter(period.checkCol);
  const formula = `=$${checkColLetter}${FIRST_DATA_ROW}=TRUE`;

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
 * A exécuter une seule fois (menu déroulant Apps Script -> setupAllPeriods
 * -> Exécuter) pour initialiser d'un coup toutes les périodes déjà
 * présentes dans la feuille (mise en forme + compactage + cases à cocher
 * sur les lignes déjà remplies). Utile uniquement au premier collage du
 * script sur une feuille qui contient déjà des données ; les nouvelles
 * périodes et les nouveaux loisirs ajoutés ensuite sont gérés
 * automatiquement par onEdit.
 */
function setupAllPeriods() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Feuille "${SHEET_NAME}" introuvable. Vérifie SHEET_NAME.`);
  }
  getPeriods(sheet).forEach((period) => {
    ensureConditionalFormatting(sheet, period);
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
