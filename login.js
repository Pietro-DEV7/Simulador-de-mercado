function entrar() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (email === "" || senha === "") {
    alert("Preencha os dados de acesso.");
    return;
  }

  alert("Login efetuado! Pagamento processado.");
  window.location.href = "index.html";
}

function voltar() {
  window.location.href = "index.html";
}

