Feature: Trocar

    Prueba de flujos de permuta

        Background:
            Given Abro la pagina de Karvi
             When Hago click en el link de "Trocar" en navbar

        Scenario: Buscar vehiculo por placa incorrecta
              And Selecciono "Pesquisar por placa"
              And Ingreso la placa "33333321"
             Then Veo el mensaje "Placa invalida"

        Scenario: Buscar vehiculo por placa
              And Selecciono "Pesquisar por placa"
              And Ingreso la placa "PLL2186"
              And Ingreso version y kilometraje
                  | version | kms   |
                  | 110I    | 50000 |
              And Completo los detalles del auto
             Then Veo el mensaje "Iniciar sessão"

        Scenario: Completar busqueda por modelo sin ingresar al sistema
              And Selecciono "Pesquisar por modelo"
              And Completo todos los datos requeridos
                  | anio | marca | modelo | version                                | kms   |
                  | 2010 | FORD  | KA     | 1.6 MPI TECNO 8V FLEX 2P MANUAL - 2010 | 50000 |
             Then Veo el mensaje "Iniciar sessão"

        Scenario: Completar busqueda por modelo ingresado al sistema
              And Ingreso como usuario
              And Hago click en el link de "Trocar" en navbar
              And Selecciono "Pesquisar por modelo"
              And Completo todos los datos requeridos
                  | anio | marca | modelo | version                                | kms   |
                  | 2010 | FORD  | KA     | 1.6 MPI TECNO 8V FLEX 2P MANUAL - 2010 | 50000 |
             Then Veo el mensaje "O que acontece agora?"