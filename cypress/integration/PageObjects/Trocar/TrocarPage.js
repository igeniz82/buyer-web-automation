import Utils from '../../Utils/utils'
const utils = new Utils()

var elements = require('./elements')
class TrocarPage {

    clickBusquedaPorCriterio(criterio) {
        utils.clickLink(elements.TROCAR.PESQUISAR_BUTTON, criterio)
    }

    completarNumeroPlaca(placa) {
        utils.ingresarTexto(elements.TROCAR.PLACA_TEXTBOX, placa)
    }

    completarPlacaYContinuar(placa) {
        this.completarNumeroPlaca(placa)
        this.aceptarTerminosCheckbox()
        this.clickContinuar()
    }

    completarAnio(anio) {
        utils.seleccionarElementoDropdown(elements.TROCAR.ANIO_DROPDOWN, anio)
    }

    completarMarca(marca) {
        utils.seleccionarElementoDropdown(elements.TROCAR.MARCA_DROPDOWN, marca)
    }

    completarModelo(modelo) {
        utils.seleccionarElementoDropdown(elements.TROCAR.MODELO_DROPDOWN, modelo)
    }

    completarVersion(version) {
        utils.seleccionarElementoDropdown(elements.TROCAR.VERSION_DROPDOWN, version)

    }

    completarKilometraje(kms) {
        utils.ingresarTexto(elements.TROCAR.KILOMETRAJE_TEXTBOX, kms)
    }

    aceptarTerminosCheckbox() {
        utils.clickBoton(elements.TROCAR.ACEPTARTERMINOS_CHECKBOX)
    }

    clickContinuar() {
        utils.clickBoton(elements.TROCAR.CONTINUAR_BUTTON)
    }

    completarVersionYKilometraje(version, kms) {
        this.completarVersion(version)
        this.completarKilometraje(kms)
        this.aceptarTerminosCheckbox()
        this.clickContinuar()
    }

    completarCamposDetallesAuto(anio, marca, modelo, version, kms) {
        this.completarAnio(anio)
        this.completarMarca(marca)
        this.completarModelo(modelo)
        this.completarVersion(version)
        this.completarKilometraje(kms)
        this.aceptarTerminosCheckbox()
        this.clickContinuar()
    }

    clickCantidadDePuertas() {
        utils.clickBoton(elements.TROCAR.PUERTAS_BUTTON)
    }

    clickTipoTransmision() {
        utils.clickBoton(elements.TROCAR.TRANSMISION_BUTTON)
    }

    completarPuertasYTransmision() {
        this.clickCantidadDePuertas()
        this.clickTipoTransmision()
        this.clickContinuarDetalles()
    }

    clickSeleccionDeColor() {
        utils.clickBoton(elements.TROCAR.COLOR_BUTTON)
    }

    seleccionarColorYContinuar() {
        this.clickSeleccionDeColor()
        this.clickContinuarColorYEstado()
    }

    completarEstadoVehiculo() {
        for (var i = 1; i < 9; i++) {
            utils.clickBoton(elements.TROCAR.ESTADO1_BUTTON + i + elements.TROCAR.ESTADO2_BUTTON)
        }
        this.clickContinuarColorYEstado()
    }

    clickContinuarColorYEstado() {
        utils.clickLink(elements.TROCAR.CONTINUARESTADO_BUTTON, 'Continuar')
    }

    completarDetallesDelAutoCompleto(anio, marca, modelo, version, kms) {
        this.completarCamposDetallesAuto(anio, marca, modelo, version, kms)
        this.completarPuertasYTransmision()
        this.seleccionarColorYContinuar()
        this.completarEstadoVehiculo()
    }

    completarDetallesDelAuto() {
        this.completarPuertasYTransmision()
        this.seleccionarColorYContinuar()
        this.completarEstadoVehiculo()
    }

    clickContinuarDetalles() {
        utils.clickLink(elements.TROCAR.CONTINUARDETALLES_BUTTON, 'Continuar')
    }

}

export default TrocarPage