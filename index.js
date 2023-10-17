// 1. Load all the urls from redirects.yml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

console.log(redirects)

// 2. Generate an html page for each redirect url from template.html

