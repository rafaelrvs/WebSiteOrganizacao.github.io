import { Cliente } from "./validacao/validacao.js";



const btnCadastro = document.querySelector("#container-bnt-cadastro")
btnCadastro.addEventListener("click", (event)=>{
  const valor = event.target.id;
  if(valor === "btn-cadastro"){
    obterValoresDoFormulario()
  }
  if(valor === "voltar")
  window.location.href ="index.html"
  
})



function obterValoresDoFormulario() {
  const formulario = document.getElementsByClassName('formulario')[0];
  const dadosDoFormulario = new FormData(formulario);
  const nome = dadosDoFormulario.get('nome');
  const email = dadosDoFormulario.get('email');
  const senhaDeEntrada = dadosDoFormulario.get('Senha');

validacaoDeUsuario(nome,email,senhaDeEntrada)
}


function validacaoDeUsuario(nome,email,senhaDeEntrada){
 const cliente = new Cliente(nome,email,senhaDeEntrada)

console.log(cliente.senha)
}