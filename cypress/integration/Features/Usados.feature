Feature: Usados

    Prueba de flujos de usados

        Background:
            Given Abro la pagina de Karvi

        Scenario: Acceder al catalogo de usados
             When Hago click en el link de "Usados" en navbar
             Then Veo el mensaje "Carros usados à venda"

        Scenario: Acceder a la ficha de producto
             When Hago click en el link de "Usados" en navbar
              And Elijo auto
             Then Veo el mensaje "Detalhes do carro"

        Scenario: Contactar concesionaria sin ingresar al sistema
             When Hago click en el link de "Usados" en navbar
              And Elijo auto y contactar al dealer
             Then Veo el mensaje "Para ver as informações da concessionária, faça o login ou cadastre-se."

        Scenario: Pedir ver el auto sin ingresar al sistema
             When Hago click en el link de "Usados" en navbar
              And Elijo auto
              And Elijo la opcion de ver el auto
             Then Veo el mensaje "Para ver as informações da concessionária, faça o login ou cadastre-se."

        Scenario: Buscar usados ingresando al sistema
             When Ingreso como usuario
              And Hago click en el link de "Usados" en navbar
              And Elijo auto
              And Elijo la opcion de llamar
             Then Veo los datos de contacto del dealer

        Scenario: Filtrar usados certificados
             When Hago click en el link de "Usados" en navbar
              And Filtro por usados certificados
             Then Solo veo los usados certificados

        Scenario: Buscar usados certificados
             When Hago click en el link de seminovos certificados
             Then Solo veo los usados certificados