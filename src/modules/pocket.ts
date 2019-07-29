namespace Pocket {
  export function counts() {
    const api = 'https://getpocket.com/v3/get'
    const data = {
      consumer_key: ENV.POCKET_CONSUMER_KEY,
      access_token: ENV.POCKET_TOKEN,
      count: ENV.POCKET_LIMIT_COUNT,
    }

    const response = UrlFetchApp.fetch(api, {
      contentType: 'application/json;charset=utf-8',
      payload: JSON.stringify(data),
    })

    const { list } = JSON.parse(response.getContentText())

    return Object.keys(list).length
  }
}
