// 1. Load all the urls from redirects.yml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

console.log(redirects)

// 2. Generate an html page for each redirect url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')

// Loop through all url redirects, and generate an html page
for (let [slug, url] of Object.entries(redirects)) {
    console.log('Generating HTML Page for ', slug)
    
}