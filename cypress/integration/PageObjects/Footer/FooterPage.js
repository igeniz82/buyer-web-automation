import Utils from '../../Utils/utils'
var elements = require('./elements')

const utils = new Utils()

class FooterPage{

    clickFooterLink(texto){
        utils.clickLink(elements.FOOTER.FOOTER_LINKS, texto)
    }

    clickLegalesLink(texto){
        utils.clickLink(elements.FOOTER.LEGALES_LINKS, texto)
    }

    clickFooterRedSocial(){
        utils.clickBoton(elements.FOOTER.INSTAGRAM_ICON)
    }

    BlogEsVisible(){
        utils.chequearElementoEsVisible(elements.FOOTER.BLOG_PAGE)
    }
}
    
export default FooterPage