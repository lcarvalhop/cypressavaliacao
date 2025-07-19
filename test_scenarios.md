# Cenários de Teste

## Login - Testes de Sanidade

### LOGIN_001 - Login com Sucesso
Descrição: Verifica se o login funciona corretamente com credenciais válidas.
Pré-requisitos:
    Usuário está na página de login: [https://www.saucedemo.com](https://www.saucedemo.com)
    Navegador em funcionamento normal.
Passos:
    1. Preencher o campo de usuário com "standard_user".
    2. Preencher o campo de senha com "secret_sauce".
    3. Clicar no botão "Login". 
Resultado Esperado:
    Redirecionamento para a página /inventory.html.
    Exibição da lista de produtos com o título "Products".

---

### LOGIN_002 - Usuário Inválido
Descrição: Testa o comportamento do sistema com um nome de usuário incorreto.
Pré-requisitos:
    Estar na página inicial de login.
Passos:
    1. Inserir "invalid_user" no campo de usuário.
    2. Informar a senha correta: "secret_sauce".
    3. Clicar em "Login". 
Resultado Esperado:
Apresentação da mensagem de erro:  
      "Epic sadface: Username and password do not match any user in this service."

---

### LOGIN_003 - Campos Vazios
Descrição: Verifica a validação dos campos obrigatórios ao tentar logar sem preencher dados. 
Pré-requisitos:
    Estar na tela de login.
Passos:
    1. Deixar os campos de usuário e senha em branco.
    2. Tentar fazer login clicando no botão correspondente.
Resultado Esperado:
     Exibição da mensagem de erro:  
      "Epic sadface: Username is required".

---

## Funcionalidade Pós-Login

### COMPRA_001 - Adicionar Produto ao Carrinho
Descrição: Garante que o botão "Add to cart" funcione corretamente e atualize o carrinho.
Pré-requisitos:
    Estar logado com o usuário "standard_user" e senha "secret_sauce".
Págiga de inventário aberta.
Passos:
    1. Procurar pelo item "Sauce Labs Backpack".
    2. Clicar no botão "Add to cart" ao lado do produto.
    3. Observar a mudança no botão e no ícone do carrinho.
Resultado Esperado:
O botão muda para "Remove". 
O carrinho exibe o número "1", indicando um item adicionado.

