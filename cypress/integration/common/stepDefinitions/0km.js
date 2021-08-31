import HomePage from '../../PageObjects/HomePage/HomePage'
import HeaderPage from '../../PageObjects/Header/HeaderPage'
import CarrosNovos from '../../PageObjects/CarrosNovos/CarrosNovosPage'
import LoginPage from '../../PageObjects/Login/LoginPage'

const hp = new HomePage()
const header = new HeaderPage()
const loginPage = new LoginPage()
const carrosNovos = new CarrosNovos()

When('Hago click en {string} en la pagina principal', (marca) =>{
    hp.clickAutosPorMarcas(marca)
})

When('Ingreso por tipo de carroceria {string}', (tipo) => {
    hp.clickAutoPorTipo(tipo)
})

When('Hago click en el link de 0km del navbar', () => {
    header.clickNovosLink()
})

When('Selecciono {string} en la seccion de Carros novos a venda', (auto) => {
    hp.seleccionarAutoSeccionAutosEnVenta(auto)
})

When('Hago click en uno de los autos {string}', (modelo) =>{
    carrosNovos.seleccionarAuto(modelo)
})

When('Selecciono marca, modelo y version', (datatable) => {
    datatable.hashes().forEach(element => {
    carrosNovos.seleccionarMarcaYModelo(element.marca, element.modelo)
    })
    carrosNovos.seleccionarVersion()
})

When('Selecciono marca y modelo', (datatable) => {
    datatable.hashes().forEach(element => {
    carrosNovos.seleccionarMarcaYModelo(element.marca, element.modelo)
    })
})

And('Elijo la version',()=>{
    carrosNovos.seleccionarVersion()
})

And('Ingreso el barrio {string}', (barrio) =>{
    carrosNovos.ingresarBarrio(barrio)
})

Then('Veo los datos para llamar', () => {
    carrosNovos.chequearConfirmacionDatosLlamada()
})

When('Hago click en ver datos del dealer', ()=>{
    carrosNovos.clickVerDatosDealer()
})

When('Hago click en Aceitar', () => {
    carrosNovos.clickBotonAceitar()
})

When('Hago click en Fechar', () => {
    carrosNovos.clickBotonFechar()
})

When('Agrego el parametro {string}', (param) =>{
    cy.visit(Cypress.config().baseUrl+param)
})
