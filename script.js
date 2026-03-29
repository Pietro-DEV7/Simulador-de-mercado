let carrinho = [];
let total = 0;

function adicionar() {

  let select = document.getElementById("produto");
  let preco = Number(select.value);
  let nome = select.options[select.selectedIndex].text;

  let quantidade = Number(document.getElementById("quantidade").value);

  if (!quantidade || quantidade <= 0) {
    alert("Digite uma quantidade válida!");
    return;
  }

  let existente = carrinho.find(item => item.nome === nome);

  if (existente) {

    let novaQtd = existente.quantidade + quantidade;

    if (novaQtd > 10) {
      alert("Quantidade máxima atingida!");
      return;
    }

    existente.quantidade += quantidade;

  } else {

    if (quantidade > 10) {
      alert("Quantidade máxima atingida!");
      return;
    }

    carrinho.push({
      nome,
      preco,
      quantidade
    });
  }

  atualizar();
}

function atualizar() {

  let lista = document.getElementById("listaCarrinho");
  let vazio = document.getElementById("vazio");

  lista.innerHTML = "";
  total = 0;

  if (carrinho.length === 0) {
    vazio.style.display = "block";
  } else {
    vazio.style.display = "none";
  }

  for (let i = 0; i < carrinho.length; i++) {

    let item = carrinho[i];

    let subtotal = item.preco * item.quantidade;
    total += subtotal;

    let li = document.createElement("li");

    li.innerHTML = `
      ${item.nome} - ${item.quantidade}x = R$ ${subtotal.toFixed(2)}
      <button onclick="remover(${i})">❌</button>
    `;

    lista.appendChild(li);
  }

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("totalResumo").textContent = total.toFixed(2);
  document.getElementById("qtdItens").textContent = carrinho.length;
}

function remover(i) {
  carrinho.splice(i, 1);
  atualizar();
}

function limparCarrinho() {

  if (carrinho.length === 0) {
    alert("Carrinho já está vazio!");
    return;
  }

  carrinho = [];
  atualizar();
}

function finalizarCompra() {

  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  alert("Compra finalizada com sucesso!");
  carrinho = [];
  atualizar();
}
