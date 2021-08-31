import LoginPage from '../../PageObjects/Login/LoginPage'

const loginPage = new LoginPage()

Then('Se muestra el perfil de usuario', () => {
    loginPage.perfilUsuarioEsVisible()
})

And('Hago click en el icono de perfil', () =>{
    loginPage.clickIconoPerfil()
})

When('Ingreso los datos solicitados', (datatable) =>{
    datatable.hashes().forEach(element => {
        loginPage.completarInformeCompra(element.nombre, element.agencia, element.documentacion)
    })
})

Then('Se muestra las ofertas realizadas', () =>{
    loginPage.seleccionarOfertasExistentes('be.visible')
})

Then('No se muestran ofertas', () =>{
    loginPage.seleccionarOfertasExistentes('not.exist')
})

Then('Hago click en el icono de borrar', () =>{
    loginPage.clickBorrarOferta()
})

Then('Debo confirmar que quiero borrar la oferta', () =>{
    loginPage.chequearConfirmarBorrarOfertaVisible()
})
