import Utils from '../../Utils/utils'
import HeaderPage from '../Header/HeaderPage'

const utils = new Utils()
const header = new HeaderPage()

var elements = require('./elements')

class LoginPage{

    // Seleccion metodo de logueo

    clickLoginSocial(red){
        utils.clickLink(elements.LOGIN.LOGINSOCIAL_LINK, red)  
    }

    clickLoginEmailLink(){
        utils.clickLink(elements.LOGIN.LOGINEMAIL_LINK, 'Ou digite seu email')
    }


    // Ingresar con email

    completarEmail(email){
        utils.ingresarTexto(elements.LOGIN.EMAIL_TEXTBOX, email)
    }

    completarPassword(password){
        utils.ingresarTexto(elements.LOGIN.PASSWORD_TEXTBOX, password)
    }

    clickBotonAceptar(){
        utils.clickBoton(elements.LOGIN.ACEPTAR_BUTTON)
        cy.wait(5000)
    }

    clickLogueoPorEmail(){
        header.clickLoginButton()
        this.clickLoginEmailLink()
    }

    ingresarCredenciales(usuario, password){
        this.completarEmail(usuario)
        this.completarPassword(password)
        this.clickBotonAceptar()
    }

    ingresarConEmail(){
        this.clickLoginEmailLink()  
        this.completarEmail()
        this.completarPassword()
        this.clickBotonAceptar()
    }

    clickIconoPerfil(){
        utils.clickBoton(elements.LOGIN.PROFILE_ICON)
    }
    

    perfilUsuarioEsVisible(){
        utils.chequearElementoEsVisible(elements.LOGIN.PERFILUSUARIO_PAGE)
    }

    // Informe de compra
    
    completarInformeCompra(nombre, agencia, respuesta){
        this.completarNombreInformeCompra(nombre)
        this.seleccionarDocumatacionConcesionaria(respuesta)
        this.seleccionarRatingConcesionaria()
        this.seleccionarAgenciaInformeCompra(agencia)
        this.clickConfirmarCompra()
    }

    completarNombreInformeCompra(nombre){
        utils.ingresarTexto(elements.LOGIN.NOMBRE_TEXTBOX, nombre)
    }

    seleccionarAgenciaInformeCompra(agencia){
        utils.seleccionarElementoDropdown(elements.LOGIN.AGENCIA_DROPDOWN, agencia)
    }

    seleccionarDocumatacionConcesionaria(respuesta){
        utils.clickBoton(elements.LOGIN.DOCUMENTACION1_BUTTON + respuesta + elements.LOGIN.DOCUMENTACION2_BUTTON)
    }

    seleccionarRatingConcesionaria(){
        utils.clickBoton(elements.LOGIN.ATENCAO_BUTTON)
        utils.clickBoton(elements.LOGIN.COMUNICACAO_BUTTON)
        utils.clickBoton(elements.LOGIN.PROCESSO_BUTTON)
        utils.clickBoton(elements.LOGIN.CONHECIMENTO_BUTTON)
    }

    clickConfirmarCompra(){
        utils.clickBoton(elements.LOGIN.CONFIRMARCOMPRA_BUTTON)
    }

    // Ver ofertas
    seleccionarOfertasExistentes(visibilidad){
        utils.chequearElementoExiste(elements.LOGIN.OFERTAS_PAGE, visibilidad)
    }

    clickBorrarOferta(){
        utils.clickBoton(elements.LOGIN.BORRAROFERTA_BUTTON)
    }

    chequearConfirmarBorrarOfertaVisible(){
        utils.chequearElementoEsVisible(elements.LOGIN.CONFIRMARBORRAROFERTA_MODAL)
    }
}

export default LoginPage