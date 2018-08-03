import request from 'request'
import { JSDOM } from 'jsdom'

const fetchBody = (url, headers) => {
  return new Promise((resolve, reject) => {
    request({ url, headers }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

const scrape = ((url, headers={}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await fetchBody(url)
      const dom = new JSDOM(body)
      resolve(dom.window)
    } catch(error) {
      reject(error)
    }
  })
})

module.exports = scrape
