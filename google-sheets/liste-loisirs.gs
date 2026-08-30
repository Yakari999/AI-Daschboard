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
 * 3. C'est tout : dès que tu valides l'en-tête "Fait ?", la case à cocher
 *    et la mise en forme barrée s'installent automatiquement sur la colonne.
 *
 * Installation initiale :
 * 1. Ouvrir le Google Sheet -> Extensions -> Apps Script.
 * 2. Coller ce fichier (remplacer le contenu de Code.gs, ou l'ajouter tel quel).
 * 3. Adapter SHEET_NAME ci-dessous si ton onglet ne s'appelle pas "Loisirs".
 * 4. Enregistrer. Aucun déclencheur manuel à créer, onEdit(e) est appelé
 *    automatiquement par Google Sheets à chaque modification.
 * 5. Si des périodes existent déjà dans la feuille au moment de coller le
 *    script, sélectionner "setupAllPeriods" dans le menu déroulant en haut
 *    de l'éditeur et cliquer sur Exécuter (une seule fois) pour les
 *    initialiser toutes d'un coup.
 *
 * Comportement : quand tu coches un loisir, son texte devient barré et la
 * ligne se déplace juste sous les loisirs non cochés (et au-dessus des
 * loisirs déjà cochés). Décocher fait l'inverse : la ligne revient tout en
 * bas du groupe des non-cochés.
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
    // Un nouvel en-tête "Fait ?" vient d'être tapé -> on installe la case
    // à cocher et la mise en forme barrée pour cette nouvelle période.
    const value = String(e.range.getValue()).trim();
    if (value === CHECKBOX_HEADER && editedCol >= 2) {
      setupPeriod(sheet, { textCol: editedCol - 1, checkCol: editedCol });
    }
    return;
  }

  if (editedRow < FIRST_DATA_ROW) return;

  const period = getPeriods(sheet).find((p) => p.checkCol === editedCol);
  if (!period) return;

  reorderPeriod(sheet, period, editedRow);
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

function reorderPeriod(sheet, period, editedRow) {
  const lastRow = sheet.getLastRow();
  if (lastRow < FIRST_DATA_ROW) return;

  const numRows = lastRow - FIRST_DATA_ROW + 1;
  const textRange = sheet.getRange(FIRST_DATA_ROW, period.textCol, numRows, 1);
  const checkRange = sheet.getRange(FIRST_DATA_ROW, period.checkCol, numRows, 1);
  const texts = textRange.getValues();
  const checks = checkRange.getValues();

  const editedIdx = editedRow - FIRST_DATA_ROW;
  const all = texts.map((t, i) => ({
    text: t[0],
    checked: checks[i][0] === true,
    isEdited: i === editedIdx,
  }));

  const moved = all.find((it) => it.isEdited);
  if (!moved) return;

  const rest = all.filter((it) => !it.isEdited);
  // Les lignes vides (jamais utilisées) restent en fin de liste.
  const nonBlankRest = rest.filter((it) => it.text !== '' || it.checked);
  const blankRest = rest.filter((it) => it.text === '' && !it.checked);

  // Position juste après le dernier loisir non coché, juste avant le
  // premier déjà coché : c'est là que la ligne modifiée doit atterrir,
  // qu'elle vienne d'être cochée (rejoint le haut des cochés) ou décochée
  // (rejoint le bas des non-cochés).
  const boundary = nonBlankRest.filter((it) => !it.checked).length;
  nonBlankRest.splice(boundary, 0, moved);

  const ordered = nonBlankRest.concat(blankRest);

  textRange.setValues(ordered.map((it) => [it.text]));
  checkRange.setValues(ordered.map((it) => [it.checked]));
}

/**
 * Installe la case à cocher et la mise en forme barrée pour une période.
 * Appelé automatiquement dès qu'un en-tête "Fait ?" est tapé, ou à la main
 * via setupAllPeriods() pour des périodes déjà présentes dans la feuille.
 */
function setupPeriod(sheet, period) {
  const maxRows = Math.max(sheet.getMaxRows(), 200);
  const numRows = maxRows - FIRST_DATA_ROW + 1;

  const checkRange = sheet.getRange(FIRST_DATA_ROW, period.checkCol, numRows, 1);
  checkRange.insertCheckboxes();

  const textRange = sheet.getRange(FIRST_DATA_ROW, period.textCol, numRows, 1);
  const checkColLetter = columnToLetter(period.checkCol);
  const formula = `=$${checkColLetter}${FIRST_DATA_ROW}=TRUE`;

  const rules = sheet.getConditionalFormatRules().filter((rule) =>
    !rule.getRanges().some((r) => r.getColumn() === period.textCol)
  );
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
 * présentes dans la feuille. Utile uniquement au premier collage du script
 * si des colonnes "Fait ?" existent déjà ; les nouvelles périodes ajoutées
 * ensuite sont initialisées automatiquement par onEdit.
 */
function setupAllPeriods() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Feuille "${SHEET_NAME}" introuvable. Vérifie SHEET_NAME.`);
  }
  getPeriods(sheet).forEach((period) => setupPeriod(sheet, period));
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
