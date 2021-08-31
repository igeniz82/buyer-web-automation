Feature: Footer

    Pruebas de links en Footer

        Background:
            Given Abro la pagina de Karvi

        Scenario: Link de carros nuevos en footer
             When Hago click en el link de "Carros Novos"
             Then Veo el mensaje "Encontre o carro que procura de forma simples e transparente"

        Scenario: Link de carros usados en footer
             When Hago click en el link de "Carros Usados"
             Then Veo el mensaje "Carros usados à venda"

        Scenario: Link de Tabela Fipe en footer
             When Hago click en el link de "Tabela Fipe"
             Then Veo el mensaje "Tabela Auto Avaliar, Fipe e Karvi"

        Scenario: Link de Preguntas frequentes en footer
             When Hago click en el link de "FAQ"
             Then Veo el mensaje "FAQs"

        Scenario: Link de Quem somos
             When Hago click en el link de "Quem Somos"
             Then Veo el mensaje "O seu copiloto para tomar a melhor decisão de compra."

        Scenario: Link de Concesionarias en footer
             When Hago click en el link de "Concessionárias"
             Then Veo el mensaje "Conheça nossos parceiros"

        Scenario: Link de Terminos y Condiciones en footer
             When Selecciono leer "Termos e Condições"
             Then Veo el mensaje "TERMOS E CONDIÇÕES DE USO DO SITE"

        Scenario: Link de Politica de Privacidad en footer
             When Selecciono leer "Política de Privacidade"
             Then Veo el mensaje "POLÍTICA DE PRIVACIDADE E CONFIDENCIALIDADE DE INFORMAÇÕES"
