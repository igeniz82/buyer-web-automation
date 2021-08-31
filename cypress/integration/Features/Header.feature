Feature: Header

    Prueba de links en el header de Karvi Brasil

Background: 
Given Abro la pagina de Karvi

Scenario: Link de 0km en el header
When Hago click en el link de "Novos" en navbar
Then Veo el mensaje "Encontre o carro que procura de forma simples e transparente"

Scenario: Link de usados en el header
When Hago click en el link de "Usados" en navbar
Then Veo el mensaje "Carros usados à venda"

Scenario: Link de permutas en el header
When Hago click en el link de "Trocar" en navbar
Then Veo el mensaje "Compra e venda fáceis e seguras"

Scenario: Link de login en el header
When Hago click en el link de login
Then El titulo de la pagina es "Iniciar sessão para comprar seu próximo carro | Karvi"

Scenario: Volver a la pagina a traves del logo de Karvi en el header
When Hago click en el link de "Trocar" en navbar
And Hago click en el logo de Karvi
Then El titulo de la pagina es "Escolha seu 0km e receba ofertas | Karvi"