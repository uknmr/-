namespace Gyazo {
  export function upload(image) {
    const response = UrlFetchApp.fetch('https://upload.gyazo.com/api/upload', {
      payload: {
        access_token: ENV.GYAZO_TOKEN,
        imagedata: image,
      },
    })

    const { url } = JSON.parse(response.getContentText())

    return url
  }
}
