import Utils from '../../Utils/utils'
var elements = require('./elements')

const utils = new Utils()
class HeaderPage{

clickKarviButton(){
    utils.clickBoton(elements.HEADER.KARVI_BUTTON)
}

clickNavBarLink(link){
    utils.clickLink(elements.HEADER.NAVBAR_LINKS, link)
}

clickLoginButton(){
    utils.clickBoton(elements.HEADER.PROFILE_ICON)
    utils.clickLink(elements.HEADER.LOGIN_BUTTON, 'Login')
}

}

export default HeaderPage