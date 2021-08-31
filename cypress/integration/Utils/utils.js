class Utils {

    irAlSitio(){
        cy.visit('/', {timeout : 50000})
    }

    clickLink(elemento, texto){
        cy.get(elemento, { timeout: 50000 }).should('be.visible').contains(texto).click()
    }

    seguirLink(texto){
        cy.contains(texto, { timeout: 50000 }).should('be.visible').click()
    }

    clickBoton(elemento){
        cy.get(elemento, { timeout: 50000 }).should('be.visible').click()
    }

    seleccionarElementoDropdown(dropdown, elemento){
        cy.get(dropdown, { timeout: 50000 }).should('be.visible').select(elemento)
    }

    ingresarTexto(elemento, texto){
        cy.get(elemento, { timeout: 50000 }).should('be.visible').type(texto)
    }

/////////////// Asserts

    chequearMensajeEsVisible(mensaje){
        cy.contains(mensaje, {timeout : 50000}).should('be.visible')
    }

    chequearTituloPagina(titulo){
        cy.title({timeout : 50000}).should('eq', titulo)
    }

    chequearDatosDealerVisible(){
        cy.get('[aria-modal="true"]', { timeout: 50000 }).should('be.visible')
    }

    chequearElementoEsVisible(elemento){
        cy.get(elemento, { timeout: 50000 }).should('be.visible')
    }

    chequearElementoExiste(elemento, visibilidad){
        cy.get(elemento).should(visibilidad)
    }

    obtenerURL(xmlPath){
        cy.task('sitemapLocations', xmlPath).as('pages')
    }

    obtenerTitle(xmlPath){
        cy.task('webPageTitle', xmlPath).as('title')
    }

    obtenerH1Tag(xmlPath){
        cy.task('webPageH1Tag', xmlPath).as('h1Tag')
    }
}

export default Utils