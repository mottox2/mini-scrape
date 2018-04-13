# mini-scrape

simple scrape function working only nodejs

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

scrape(url, function(window) {
  console.log('title: ', window.document.title)
  console.log('h1: ', window.document.querySelector('h1').textContent.replace(/\n/g, ''))
})
```

**webpack**

```js
import scrape from 'mini-scrape'
const url = 'https://github.com/mottox2/mini-scrape'

scrape(url, window => {
  console.log('title: ', window.document.title)
  console.log('h1: ', window.document.querySelector('h1').textContent.replace(/\n/g, ''))
})
```
