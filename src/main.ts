function main() {
  const feedlyCounts = Feedly.counts()
  const feedlyBoardCounts = Feedly.boardCounts()
  const pocketCounts = Pocket.counts()
  const scrapboxCounts = Scrapbox.counts()

  Logger.log(
    `合計: ${feedlyCounts + feedlyBoardCounts + pocketCounts + scrapboxCounts}`,
  )
  Logger.log(`Feedly: ${feedlyCounts}`)
  Logger.log(`Feedly Boards: ${feedlyBoardCounts}`)
  Logger.log(`Pocket: ${pocketCounts}`)
  Logger.log(`Scrapbox: ${scrapboxCounts}`)

  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSpreadsheet.getSheetByName(ENV.TRIX_SHEET_NAME)
  Trix.setValues(sheet, {
    feedlyCounts,
    feedlyBoardCounts,
    pocketCounts,
    scrapboxCounts,
  })
}
