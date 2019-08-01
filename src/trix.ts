namespace Trix {
  const getLastRow = (
    sheet: GoogleAppsScript.Spreadsheet.Sheet,
    row: String,
  ) => {
    return sheet
      .getRange(`${row}:${row}`)
      .getValues()
      .filter(String).length
  }

  export function setValues(
    sheet: GoogleAppsScript.Spreadsheet.Sheet,
    { feedlyCounts, feedlyBoardCounts, pocketCounts, scrapboxCounts },
  ) {
    const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMddHH')
    const values = [
      now,
      feedlyCounts || 0,
      feedlyBoardCounts || 0,
      pocketCounts || 0,
      scrapboxCounts || 0,
      feedlyCounts + feedlyBoardCounts + pocketCounts + scrapboxCounts,
    ]

    const lastRow = getLastRow(sheet, 'A')
    const targetRange = sheet.getRange(lastRow + 1, 1, 1, values.length)

    targetRange.setValues([values])
  }
}
