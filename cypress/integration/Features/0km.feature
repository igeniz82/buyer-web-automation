Feature: 0km

    Pruebas de flujos de autos nuevos

        Background:
            Given Abro la pagina de Karvi

        Scenario: Consultar por 0km ingresado en el sistema
             When Ingreso como usuario
              And Hago click en el link de "Novos" en navbar
              And Selecciono marca y modelo
                  | marca     | modelo         |
                  | Chevrolet | Novo Onix 2021 |
              And Elijo la version
              And Hago click en ver datos del dealer
              And Hago click en Aceitar
              And Selecciono la opcion "Ligar"
             Then Veo los datos de contacto del dealer

        Scenario: Buscar autos 0km por marca
             When Hago click en "Peugeot" en la pagina principal
              And La pagina requerida es desplegada
             Then Veo el mensaje "Carros novos"

        Scenario: Cotizar autos 0km por marca sin ingresar al sistema
             When Hago click en "Chevrolet" en la pagina principal
              And Hago click en uno de los autos "Novo Onix 2021"
              And Elijo la version
              And Ingreso el barrio "São Paulo - SP, Brasil"
              And Hago click en ver datos del dealer
             Then Veo el mensaje "Para ver as informações da concessionária, faça o login ou cadastre-se."

        Scenario: Consultar por 0km sin ingresar al sistema
             When Hago click en el link de "Novos" en navbar
              And Selecciono marca y modelo
                  | marca     | modelo         |
                  | Chevrolet | Novo Onix 2021 |
              And Elijo la version
              And Ingreso el barrio "São Paulo - SP, Brasil"
              And Hago click en ver datos del dealer
             Then Veo el mensaje "Para ver as informações da concessionária, faça o login ou cadastre-se."

        Scenario: Buscar autos 0km por carroceria
             When Ingreso por tipo de carroceria "Hatchback"
              And La pagina requerida es desplegada
             Then Veo el mensaje "Catálogo de carros novos"

        Scenario: Buscar ficha de producto buscando por carroceria
             When Ingreso por tipo de carroceria "Hatchback"
              And Hago click en uno de los autos "Chevrolet Novo Onix"
             Then Veo el mensaje "Versões Novo Onix 2021"

        Scenario: Cotizar buscando por carroceria
             When Ingreso por tipo de carroceria "Hatchback"
              And Hago click en uno de los autos "Chevrolet Novo Onix 2021"
              And Elijo la version
              And Ingreso el barrio "São Paulo - SP, Brasil"
              And Hago click en ver datos del dealer
             Then Veo el mensaje "Para ver as informações da concessionária, faça o login ou cadastre-se."

        Scenario: Ver ficha de producto eligiendo marca y modelo
             When Hago click en el link de "Novos" en navbar
              And Selecciono marca y modelo
                  | marca     | modelo         |
                  | Chevrolet | Novo Onix 2021 |
             Then Veo el mensaje "Versões Novo Onix"

        Scenario: Ver ficha de producto eligiendo desde Carros novos a venda
             When Selecciono "Chevrolet Cruze 2020" en la seccion de Carros novos a venda
             Then Veo el mensaje "Versões Cruze 2020"

        Scenario: CVR-133
             When Ingreso como usuario
              And Hago click en el link de "Novos" en navbar
              And Selecciono marca y modelo
                  | marca     | modelo         |
                  | Chevrolet | Novo Onix 2021 |
              And Elijo la version
              And Hago click en ver datos del dealer
              And Hago click en Aceitar
              And Selecciono la opcion "Ligar"
             Then Veo los datos de contacto del dealer
              And Hago click en Fechar
              And Hago click en el link de "Novos" en navbar
              And Selecciono marca y modelo
                  | marca     | modelo         |
                  | Chevrolet | Novo Onix 2021 |
              And Elijo la version
             Then Veo el mensaje "Versões Novo Onix 2021"
