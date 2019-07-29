namespace Feedly {
  const baseUrl = 'https://cloud.feedly.com'

  export function counts() {
    const api = '/v3/markers/counts'
    const response = UrlFetchApp.fetch(`${baseUrl}${api}`, {
      contentType: 'application/json;charset=utf-8',
      headers: {
        Authorization: ENV.FEEDLY_TOKEN,
      },
    })

    const { unreadcounts } = JSON.parse(response.getContentText())

    const globalAll = unreadcounts.filter(
      feed => feed.id.toString().indexOf('global.all') > -1,
    )[0]

    return globalAll.count
  }

  export function boardCounts() {
    const api = `/v3/streams/contents?streamId=${ENV.FEEDLY_STREAM_ID}&count=500`
    const response = UrlFetchApp.fetch(`${baseUrl}${api}`, {
      contentType: 'application/json;charset=utf-8',
      headers: {
        Authorization: ENV.FEEDLY_TOKEN,
      },
    })

    const { items } = JSON.parse(response.getContentText())
    return items.length
  }
}
