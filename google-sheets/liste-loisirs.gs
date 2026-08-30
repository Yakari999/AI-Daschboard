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
 * Installation :
 * 1. Ouvrir le Google Sheet -> Extensions -> Apps Script.
 * 2. Coller ce fichier (remplacer le contenu de Code.gs, ou l'ajouter tel quel).
 * 3. Adapter SHEET_NAME et le tableau PERIODS ci-dessous à ta feuille.
 * 4. Dans l'éditeur Apps Script, sélectionner la fonction "setupSheet" dans
 *    le menu déroulant en haut et cliquer sur Exécuter (une seule fois) :
 *    ça installe les cases à cocher et la mise en forme "barré" automatique.
 * 5. Enregistrer. Le déclencheur onEdit se lance automatiquement à chaque
 *    modification de la feuille, aucun déclencheur manuel à créer.
 *
 * Comportement : quand tu coches un loisir, son texte devient barré et la
 * ligne se déplace juste sous les loisirs non cochés (et au-dessus des
 * loisirs déjà cochés). Décocher fait l'inverse : la ligne revient tout en
 * bas du groupe des non-cochés.
 */

const SHEET_NAME = 'Loisirs';
const HEADER_ROW = 1;
const FIRST_DATA_ROW = HEADER_ROW + 1;

// Une entrée par colonne de période : adapter les lettres de colonnes.
const PERIODS = [
  { name: 'Été 2026', textCol: 'A', checkCol: 'B' },
  { name: 'Hiver 2026-2027', textCol: 'C', checkCol: 'D' },
  { name: 'Vacances mars 2027', textCol: 'E', checkCol: 'F' },
];

function onEdit(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== SHEET_NAME) return;
  if (e.range.getNumRows() !== 1 || e.range.getNumColumns() !== 1) return;

  const editedRow = e.range.getRow();
  const editedCol = e.range.getColumn();
  if (editedRow < FIRST_DATA_ROW) return;

  const period = PERIODS.find(
    (p) => sheet.getRange(p.checkCol + '1').getColumn() === editedCol
  );
  if (!period) return;

  reorderPeriod(sheet, period, editedRow);
}

function reorderPeriod(sheet, period, editedRow) {
  const textColIdx = sheet.getRange(period.textCol + '1').getColumn();
  const checkColIdx = sheet.getRange(period.checkCol + '1').getColumn();
  const lastRow = sheet.getLastRow();
  if (lastRow < FIRST_DATA_ROW) return;

  const numRows = lastRow - FIRST_DATA_ROW + 1;
  const textRange = sheet.getRange(FIRST_DATA_ROW, textColIdx, numRows, 1);
  const checkRange = sheet.getRange(FIRST_DATA_ROW, checkColIdx, numRows, 1);
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
 * A exécuter une seule fois (menu déroulant Apps Script -> setupSheet ->
 * Exécuter) pour installer les cases à cocher et la mise en forme barrée
 * automatique sur toutes les colonnes définies dans PERIODS.
 */
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Feuille "${SHEET_NAME}" introuvable. Vérifie SHEET_NAME.`);
  }

  const maxRows = Math.max(sheet.getMaxRows(), 200);
  const numRows = maxRows - FIRST_DATA_ROW + 1;

  const rules = sheet.getConditionalFormatRules().filter((rule) => {
    // On garde les règles qui ne concernent pas les colonnes gérées ici.
    return !PERIODS.some((p) =>
      rule.getRanges().some((r) => r.getColumn() === sheet.getRange(p.textCol + '1').getColumn())
    );
  });

  PERIODS.forEach((period) => {
    const checkRange = sheet.getRange(FIRST_DATA_ROW, sheet.getRange(period.checkCol + '1').getColumn(), numRows, 1);
    checkRange.insertCheckboxes();

    const textRange = sheet.getRange(FIRST_DATA_ROW, sheet.getRange(period.textCol + '1').getColumn(), numRows, 1);
    const formula = `=$${period.checkCol}${FIRST_DATA_ROW}=TRUE`;

    const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied(formula)
      .setStrikethrough(true)
      .setFontColor('#999999')
      .setRanges([textRange])
      .build();
    rules.push(rule);
  });

  sheet.setConditionalFormatRules(rules);
}
