import HeaderPage from '../../PageObjects/Header/HeaderPage'
import TrocarPage from '../../PageObjects/Trocar/TrocarPage'

const header = new HeaderPage()
const trocarPage = new TrocarPage()

When('Hago click en el link de Permutas', () => {
    header.clickTrocarLink()
})

When('Selecciono {string}', (criterio) => {
    trocarPage.clickBusquedaPorCriterio(criterio)
})

Then('Ingreso la placa {string}', (placa) =>{
    trocarPage.completarPlacaYContinuar(placa)
})

When('Completo todos los datos requeridos', (datatable) => {
    datatable.hashes().forEach(element => {
    trocarPage.completarDetallesDelAutoCompleto(element.anio, element.marca, element.modelo, element.version, element.kms)
    });
})

Then('Completo los detalles del auto', () =>{
    trocarPage.completarDetallesDelAuto()
})

When('Ingreso version y kilometraje', (datatable) => {
    datatable.hashes().forEach(element => {
    trocarPage.completarVersionYKilometraje(element.version, element.kms)
    });
})