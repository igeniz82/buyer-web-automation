/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fetch = require('node-fetch')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('task', {
    sitemapLocations(xmlPath) {
      return fetch(xmlPath, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/xml',
        },
      })
        .then(res => res.text())
        .then(xml => {
          const locs = [...xml.matchAll(`<loc>(.|\n)*?</loc>`)].map(([loc]) =>
            loc.replace('<loc>', '').replace('</loc>', ''),
          )
          return locs
        })
    },
  })

  on('task', {
    webPageTitle(xmlPath) {
      return fetch(xmlPath, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/xml',
        },
      })
        .then(res => res.text())
        .then(xml => {
          const titles = [...xml.matchAll(`<title>(.|\n)*?</title>`)].map(([title]) =>
            title.replace('<title>', '').replace('</title>', ''),
          )
          return titles
        })
    },
  })

  on('task', {
    webPageH1Tag(xmlPath) {
      return fetch(xmlPath, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/xml',
        },
      })
        .then(res => res.text())
        .then(xml => {
          const h1Tags = [...xml.matchAll(`<h1>(.|\n)*?</h1>`)].map(([h1]) =>
            h1.replace('<h1>', '').replace('</h1>', ''),
          )
          return h1Tags
        })
    },
  })
return config
  }
 

