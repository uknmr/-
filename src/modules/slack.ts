namespace Slack {
  export function post({
    feedlyCounts,
    feedlyBoardCounts,
    pocketCounts,
    scrapboxCounts,
    gyazoImageUrl,
  }) {
    const sum = feedlyCounts + feedlyBoardCounts + pocketCounts + scrapboxCounts
    const data = {
      text: gyazoImageUrl,
      attachments: [
        {
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*合計*: ${sum}`,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Feedly*: ${feedlyCounts}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Feedly Board*: ${feedlyBoardCounts}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Pocket*: ${pocketCounts}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Scrapbox*: ${scrapboxCounts}`,
                },
              ],
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: '*<fakelink.ToMoreTimes.com|Show more times>*',
              },
            },
          ],
        },
      ],
    }

    UrlFetchApp.fetch(
      'https://hooks.slack.com/services/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',
      {
        payload: JSON.stringify(data),
        muteHttpExceptions: true,
      },
    )
  }
}
