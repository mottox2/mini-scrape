import request from 'request'
import { JSDOM } from 'jsdom'

const fetchBody = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

const scrape = ((url) => {
  return new Promiss(async (resolve, reject) => {
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
