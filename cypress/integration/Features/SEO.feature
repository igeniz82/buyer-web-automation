Feature: SEO

    Pruebas de SEO

        Scenario: Chequear sitemap de faq
            Given Chequeo el xml "https://s.karvi.com.br/sitemap-fq.xml"
             Then La respuesta es 200

        Scenario: Chequear que el sitemap.xml haya sido removido
            Given Chequeo el xml "https://s.karvi.com.br/sitemap.xml"
             Then La respuesta es 404

        Scenario: Chequear sitemap de ciudad en carros novos (incorrecto)
            Given Chequeo el sitio "https://s.karvi.com.br/carros-novos/feira-de-santana"
             Then La respuesta es 200

        Scenario: Chequear sitemap de ciudad en carros novos (correcto)
            Given Chequeo el sitio "https://s.karvi.com.br/carros/feira-de-santana"
             Then La respuesta es 200

        Scenario: Chequear sitemap de ciudad en carros novos por marca
            Given Chequeo el xml "https://s.karvi.com.br/carros-novos-geo-marca.xml"
             Then La respuesta es 200

        Scenario: Chequear que robots.txt no contenga el sitemap
            Given Chequeo el archivo "robots.txt"
              And Chequeo que "https://s.karvi.com.br/sitemap.xml" no este incluido

              

        # @ignore-scenario
        # Scenario Outline: Chequear que las urls de la pagina sean closed directory
        #     Given Chequeo el xml "<xml>"
        #      Then La respuesta es 200
        #       And Chequeo que el titulo de la "<xml>" no este vacio
    
        # Examples:
        #           | xml                                               |
        #           | https://s.karvi.com.br/sitemap-fq.xml             |
        #           | https://s.karvi.com.br/carros-novos-cidade.xml    |
        #           | https://s.karvi.com.br/carros-novos-segmentos.xml |
        #           | https://s.karvi.com.br/ficha-nuevos.xml           |
        #           | https://s.karvi.com.br/usados.xml                 |
        