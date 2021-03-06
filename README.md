# mini-scrape

[![npm version](https://badge.fury.io/js/mini-scrape.svg)](https://badge.fury.io/js/mini-scrape)

simple scrape function working on nodejs

## Installation

```
$ npm install mini-scrape
```

or yarn

```
$ yarn install mini-scrape
```

## Example

```js
const scrape = require('mini-scrape')
const url = 'https://github.com/mottox2/mini-scrape'

scrape(url).then(window => {
  console.log('title: ', window.document.title)
  console.log('h1: ', window.document.querySelector('h1').textContent.replace(/\n/g, ''))
})
```

**webpack**

```js
import scrape from 'mini-scrape'
const url = 'https://github.com/mottox2/mini-scrape'

scrape(url).then(window => {
  console.log('title: ', window.document.title)
  console.log('h1: ', window.document.querySelector('h1').textContent.replace(/\n/g, ''))
})
```

with headers

```js
import scrape from 'mini-scrape'
const url = 'https://github.com/mottox2/mini-scrape'

scrape(url, {
  headers: {
    'User-Agent': 'mini-scrape'
  }
}).then(window => {
  console.log('title: ', window.document.title)
  console.log('h1: ', window.document.querySelector('h1').textContent.replace(/\n/g, ''))
})
```
