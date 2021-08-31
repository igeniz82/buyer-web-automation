import HomePage from '../../PageObjects/HomePage/HomePage'
import HeaderPage from '../../PageObjects/Header/HeaderPage'
import CarrosNovos from '../../PageObjects/CarrosNovos/CarrosNovosPage'
import LoginPage from '../../PageObjects/Login/LoginPage'

const hp = new HomePage()
const header = new HeaderPage()
const loginPage = new LoginPage()
const carrosNovos = new CarrosNovos()

When('Expando la lista de autos', () => {
    hp.clickBotonVerMasAutosEnVenta()
})

When('Chequeo cada uno de los links', () => {
    hp.chequearLinks()
})

When('Chequeo las imagenes', () => {
    hp.chequearLinks()
})