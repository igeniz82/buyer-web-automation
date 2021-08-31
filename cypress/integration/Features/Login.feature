Feature: Login

    Flujos de logueo en la pagina de Karvi

        Background:
            Given Abro la pagina de Karvi
             When Elijo la opcion de logueo por email

        Scenario: Log in en Karvi Brasil usando email
              And Ingreso mis credenciales
                  | usuario        | password |
                  | test@gmail.com | aaaa1111 |
             Then Se muestra el perfil de usuario

        Scenario: Log in en Karvi Brasil con credenciales incorrectas
              And Ingreso mis credenciales
                  | usuario        | password |
                  | test@gmail.com | aaaa2222 |
             Then Veo el mensaje "Opa! E-mail ou senha inválidos"

        Scenario: Informo una compra realizada
              And Ingreso como usuario
              And Hago click en el icono de perfil
              And Selecciono la opcion "Relatório de compra"
              And Hago click en el icono de perfil
              And Ingreso los datos solicitados
                  | nombre        | agencia                                | documentacion |
                  | Ignacio Geniz | Chevrolet Vigorito (Equipe de Vendas ) | true          |
             Then Veo el mensaje 'Parabéns pela sua compra Ignacio Geniz!'

        Scenario: Cambiar datos de usuario
              And Ingreso como usuario
              And Hago click en el icono de perfil
              And Selecciono la opcion "Meu perfil"
             Then Veo el mensaje "Meu Perfil"

        Scenario: Deslogueo del sistema
              And Ingreso como usuario
              And Hago click en el icono de perfil
              And Selecciono la opcion "Sair"
             Then Veo el mensaje "Você dirige seu carro novo desde que começa a procurá-lo."

        Scenario: Ver historial de ofertas (con ofertas existentes)
              And Ingreso como usuario
              And Hago click en el link de "Meus carros" en navbar
             Then Se muestra las ofertas realizadas

        Scenario: Ver historial de ofertas (sin ofertas existentes)
              And Ingreso mis credenciales
                  | usuario                | password |
                  | nachogeniz@hotmail.com | aaaa1111 |
             Then No se muestran ofertas

        Scenario: Borrar oferta
              And Ingreso mis credenciales
                  | usuario        | password |
                  | test@gmail.com | aaaa1111 |
              And Hago click en el icono de borrar
             Then Debo confirmar que quiero borrar la oferta