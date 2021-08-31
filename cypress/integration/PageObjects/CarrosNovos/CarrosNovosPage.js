import Utils from '../../Utils/utils'
var elements = require('./elements')

const utils = new Utils()

class CarrosNovos{

seleccionarMarca(marca){
    utils.clickLink(elements.NOVOS.MARCA_BUTTON, marca)
}

seleccionarModelo(modelo){
    utils.seleccionarElementoDropdown(elements.NOVOS.MODELO_DROPDOWN, modelo)
}

seleccionarAuto(modelo){
    utils.clickLink(elements.NOVOS.MODELO_LINK, modelo)
}

clickVerCarros(){
    utils.clickLink(elements.NOVOS.VERCARROS_LINK, 'Ver carros')  
}

seleccionarMarcaYModelo(marca, modelo){
    this.seleccionarMarca(marca)
    this.seleccionarModelo(modelo)
    this.clickVerCarros()
}

seleccionarVersion(){
    utils.clickBoton(elements.NOVOS.VERSION_LINK)
}

ingresarBarrio(barrio){
    cy.get(elements.NOVOS.BARRIO_MODAL).get(elements.NOVOS.BARRIO_TEXTBOX).type(barrio).wait(1000)
    cy.get(elements.NOVOS.BARRIO_PRIMERRESULTADO).click().wait(5000)
    cy.get(elements.NOVOS.BARRIOACEPTAR_BUTTON).click()
}

clickVerDatosDealer(){
    utils.clickLink(elements.NOVOS.VERDATOSDEALER_LINK, 'Ver dados da concessionária')
}

clickBotonAceitar(){
    utils.clickBoton(elements.NOVOS.ACEITAR_BUTTON)
}

clickBotonFechar(){
    utils.clickBoton(elements.NOVOS.FECHAR_BUTTON)
}

clickBotonLlamar(metodo){
    utils.clickBoton(elements.NOVOS.LLAMAR_LINK, metodo)
}

clickContinuar(){
    utils.clickBoton(elements.NOVOS.CONTINUAR_BUTTON)
}

chequearConfirmacionDatosLlamada(){
    utils.chequearElementoEsVisible(elements.NOVOS.DATOSDEALER_MODAL)
}

chequearTagMelhoresOfertas(){
    utils.chequearElementoEsVisible(elements.NOVOS.MELHOROFERTA_TAG)
}

confirmarComunicacionPorLlamada(){
    this.clickVerDatosDealer()
    this.clickBotonLlamar()
}

}

export default CarrosNovos