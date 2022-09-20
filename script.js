function alterarTema() {
  document.body.classList.toggle("darkMode");
  var classe = document.getElementsByClassName("cp_embed_iframe");
  console.log(classe.item(0));
}