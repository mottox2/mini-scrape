import request from 'request'
import { JSDOM } from 'jsdom';

const fetchBody = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (e, response, body) => {
      if (!e && response.statusCode === 200) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

const scrape = (async (url, callback) => {
  try {
    const body = await fetchBody(url)
    const dom = new JSDOM(body)
    callback(dom.window)
  } catch(e) {
    console.error(e)
  }
})

module.exports = scrape
