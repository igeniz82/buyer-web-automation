import FooterPage from '../../PageObjects/Footer/FooterPage'

const footer = new FooterPage()

When('Selecciono leer {string}', (texto) =>{
    footer.clickLegalesLink(texto)
})

Then('Hago click en el link de {string}', (texto) =>{
    footer.clickFooterLink(texto)
})

Then('Hago click en el icono de red social', (datatable) =>{
    datatable.hashes().forEach(element => {
            footer.clickFooterRedSocial(element.red, element.perfil)
        })

Then('Veo el logo del blog', () =>{
    footer.BlogEsVisible()    
})
})