import HomePage from '../../PageObjects/HomePage/HomePage'
import HeaderPage from '../../PageObjects/Header/HeaderPage'
import CarrosUsados from '../../PageObjects/CarrosUsados/CarrosUsadosPage'
import LoginPage from '../../PageObjects/Login/LoginPage'

const hp = new HomePage()
const header = new HeaderPage()
const carrosUsados = new CarrosUsados()
const loginPage = new LoginPage()

When('Elijo auto y contactar al dealer', () => {
    carrosUsados.seleccionarUsadoYContactarDealer()
})

When('Hago click en el boton de Carros Usados',() =>{
    hp.clickVerCarrosUsados()
})

When('Elijo auto', () => {
    carrosUsados.seleccionarUsado()
})

When('Elijo la opcion de llamar', () =>{
    carrosUsados.clickLigar() 
})

When('Elijo la opcion de ver el auto', () =>{
    carrosUsados.clickQuieroVerlo()
})

When('Hago click en el link de seminovos certificados', ()=>{
    hp.clickVerSeminovosCertificados()
})

When('Filtro por usados certificados', () => {
    carrosUsados.seleccionarCertificados()
})

Then('Solo veo los usados certificados', () => {
    carrosUsados.usadosCertificadosVisibles()
})

When('Hago click en Aceitar', () => {
    carrosUsados.clickAceitar()
})