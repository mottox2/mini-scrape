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

```
const scrape = require('mini-scrape')

scrape('', function(window) {
  var document = window.document
})
```

**webpack**

```
import scrape from 'mini-scrape'

scrape('', function(window) {
  var document = window.document
})
```
