import Utils from '../../Utils/utils'
import HeaderPage from '../../PageObjects/Header/HeaderPage'
import LoginPage from '../../PageObjects/Login/LoginPage'

const utils = new Utils()
const header = new HeaderPage()
const login = new LoginPage()

////////// Abrir la pagina y logueos

Given('Abro la pagina de Karvi', () => {
    utils.irAlSitio()
})

When('Elijo la opcion de logueo por email', () => {
    login.clickLogueoPorEmail()
})

When('Ingreso como usuario', () =>{
    cy.request({
        url: "https://api-stage.karvi.com.ar/auth/karvi?site=br",
        method: 'POST',
        body: {
            "email":"ignaciogeniz@hotmail.com","password":"aaaa1111"
        }

    }).its('body')
    .then(response => cy.setCookie('token', response.token))

    cy.reload()
})

And('Ingreso mis credenciales', (datatable) => {
    datatable.hashes().forEach(element => {
        login.ingresarCredenciales(element.usuario, element.password)
    })
})

////////// Funciones en comun

Then('Veo el mensaje {string}', (mensaje) => {
    utils.chequearMensajeEsVisible(mensaje)
})

Then('El titulo de la pagina es {string}', (titulo) => {
    utils.chequearTituloPagina(titulo)
})

When('La pagina requerida es desplegada', () => {
})

Then('Veo los datos de contacto del dealer', () => {
    utils.chequearDatosDealerVisible()
})
    
When('Selecciono la opcion {string}', (texto) => {
    utils.seguirLink(texto)
})

Then('La respuesta es {int}', (resp) => {
    cy.get('@get-response').should((response) => {
        expect(response.status).to.eq(resp)
    })    
})

////////// Links del header

When('Hago click en el link de {string} en navbar', (link) => {
    header.clickNavBarLink(link)
})

When('Hago click en el link de login', () => {
    header.clickLoginButton()
})

And('Hago click en el logo de Karvi', () => {
    header.clickKarviButton()
})