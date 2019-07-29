namespace Scrapbox {
  export function counts() {
    const api = `https://scrapbox.io/api/pages/${ENV.SCRAPBOX_PROJECT_NAME}/${
      ENV.SCRAPBOX_PAGE_TITLE
    }?limit=${ENV.SCRAPBOX_LIMIT_COUNT}`
    const response = UrlFetchApp.fetch(api, {
      contentType: 'application/json;charset=utf-8',
    })

    const {
      relatedPages: { links1hop },
    } = JSON.parse(response.getContentText())

    return links1hop.length
  }
}
