// 1. Load all the urls from redirects.yml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
console.log(redirectsFile)

// 2. Generate an html page for each redirect url from template.html

