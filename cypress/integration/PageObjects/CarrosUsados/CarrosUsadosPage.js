import Utils from '../../Utils/utils'
var elements = require('./elements')

const utils = new Utils()

class CarrosUsados{

    seleccionarUsado(){
        utils.clickBoton(elements.USADOS.PRIMERRESULTADO_BUTTON)
    }

    clickContactarConcesionaria(){
        utils.clickBoton(elements.USADOS.CONTACTARDEALER_BUTTON)
    }

    clickQuieroVerlo(){
        utils.clickBoton(elements.USADOS.QUIEROVERLO_BUTTON)
    }

    clickLigar(){
        utils.clickBoton(elements.USADOS.LLAMAR_BUTTON)
    }

    seleccionarCertificados(){
        utils.clickBoton(elements.USADOS.FILTRARCERTIFICADOS_BUTTON)
    }

    usadosCertificadosVisibles(){
        utils.chequearElementoEsVisible(elements.USADOS.CERTIFICADOS_IMG)
    }

    clickAceitar(){
        utils.clickBoton(elements.USADOS.ACEITAR_BUTTON)
    }

    seleccionarUsadoYContactarDealer(){
        this.seleccionarUsado()
        this.clickContactarConcesionaria()
    }

    }
    
export default CarrosUsados