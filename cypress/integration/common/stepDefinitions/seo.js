import Utils from '../../Utils/utils'

const utils = new Utils()

When('Chequeo el sitio {string}', (url) =>{
    cy.request({
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode:false
    }).as('get-response')
})

When('Chequeo el archivo {string}', (filePath) =>{
    cy.fixture(filePath).as('get-response')
})

Then('Chequeo que {string} no este incluido', (texto) =>{
    cy.get('@get-response').should('not.contain', texto)
})

 When('Chequeo el xml {string}', (xmlurl) =>{
    cy.request({
        log: true,
        url: xmlurl,
        failOnStatusCode:false
 }).as('get-response')
})

Then('Chequeo que el titulo de la {string} no este vacio', (xmlPath) =>{
    utils.obtenerURL(xmlPath)
    cy.get('@pages').then((pages) =>{
        pages.forEach(page => {
            
            var lastChar = page.charAt(page.length-1)
            expect(lastChar).to.eq('/')
            
            utils.obtenerTitle(page) 
            cy.get('@title').then((title) =>{
                title.forEach(titulo => {
                    expect(titulo).to.not.eq('')
                })
            })

            utils.obtenerH1Tag(page) 
            cy.get('@h1Tag').then((h1) =>{
                h1.forEach(h1Tag => {
                    expect(h1Tag).to.not.eq('')
        })
    })
})
    })

})
