import Utils from '../../Utils/utils'
var elements = require('./elements')

const utils = new Utils()

class QuemSomos {

    clickImprensaLinks(){


        cy.get('.col-span-2 > a > div > img').its('length').then((size) => {

            for (var i = 2; i <= 2; i++) {
                cy.get(':nth-child(' + i + ') > .col-span-4 > .font-normal > :nth-child(2) > .text-blue-600').should('have.attr', 'href').then((href) => {
                    expect(href).contains('https://www1.folha.uol.com.br/colunas/eduardosodre/2020/08/brasil-e-argentina-vivem-em-descompasso-no-setor-automotivo.shtml')
                })
            }
        })
    }

}

export default QuemSomos