import Utils from '../../Utils/utils'
var elements = require('./elements')

const utils = new Utils()
class HomePage {


    clickVerCarrosNovos() {
        utils.clickBoton(elements.HOMEPAGE.CARROSNOVOS_BUTTON)
    }

    clickVerCarrosUsados() {
        utils.clickBoton(elements.HOMEPAGE.CARROSUSADOS_BUTTON)
    }

    clickVerSeminovosCertificados() {
        utils.clickLink(elements.HOMEPAGE.SEMINOVOS_LINK, 'Ver seminovos certificados')
    }

    clickAutosPorMarcas(marca) {
        utils.clickLink(elements.HOMEPAGE.MARCAS_LINK, marca)
    }

    clickAutoPorTipo(tipo) {
        utils.clickLink(elements.HOMEPAGE.TIPOS_LINK, tipo)
    }

    seleccionarAutoSeccionAutosEnVenta(auto) {
        utils.clickLink(elements.HOMEPAGE.AUTOSENVENTA_LINK, auto)
    }

    clickBotonVerMasAutosEnVenta() {
        utils.clickLink(elements.HOMEPAGE.VERMAS_LINK, 'Ver mais')
    }


    chequearLinks() {
        cy.get('.car-list_listOpen__1PBtM > ul >').its('length').then((size) => {

            var respuestas = []

            for (var i = 1; i <= size; i++) {
                cy.get('.car-list_listOpen__1PBtM > ul > :nth-child(' + i + ') > a').should('have.attr', 'href').then((href) => {
                    cy.request({
                        method: 'GET',
                        url: Cypress.config().baseUrl + href,
                        headers: {
                            'Content-Type': 'application/html'
                        },
                                                failOnStatusCode: false
                    }).as('get-response')
                })
            }
        })
    }

}

export default HomePage