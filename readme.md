# 🛒 Mini Sistema de Mercado

Esse projeto é um mini sistema de mercado desenvolvido para treinar lógica de programação na prática, evoluindo com funcionalidades simples como login de usuário.

---

## 📌 Sobre o projeto:

Aqui você consegue:

- Escolher produtos  
- Definir a quantidade  
- Adicionar ao carrinho  
- Ver o total sendo calculado em tempo real  
- Remover itens  
- Limpar o carrinho  
- Finalizar a compra (simulação)  
- Fazer login antes de concluir a compra  

Tudo isso usando apenas HTML, CSS e JavaScript.

---

## 🧠 O que eu treinei aqui:

Esse projeto foi focado em treinar lógica de programação, utilizei:

### Variáveis globais

Usei para guardar o estado do sistema, como:

- o carrinho  
- o total da compra  

### Variáveis locais

Usei dentro das funções para pegar dados do usuário (produto, quantidade, etc).

### If / Else

- validar se a quantidade é válida  
- impedir valores inválidos  
- limitar o máximo de 10 unidades por produto  

### For / forEach

Usei para percorrer o carrinho:

- listar os produtos  
- calcular o total  
- atualizar a tela  

### Funções

Separei o sistema em funções para organizar melhor:

- `adicionar()` → adiciona produto  
- `atualizar()` → atualiza tudo na tela  
- `remover()` → remove item  
- `limparCarrinho()` → limpa tudo  
- `finalizarCompra()` → simula uma compra  
- `entrar()` → simula login  
- `voltar()` → retorna para a loja  

---

## 🛠️ Tecnologias

- HTML5  
- CSS3  
- JavaScript  

---

## 🚀 Como usar

- Baixe ou clone o projeto  
- Abra o arquivo `index.html` no navegador  
- Escolha um produto  
- Digite a quantidade  
- Clique em **Adicionar ao Carrinho**  

---

## 📁 Estrutura:
Simulador-de-mercado/
├── index.html
├── login.html
├── script.js
├── login.js
└── style.css