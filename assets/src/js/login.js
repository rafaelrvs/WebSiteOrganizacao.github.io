import { bd } from "./bd/bd.js";

const btnLogin = document.querySelector("#div__text__btn");

btnLogin.addEventListener("click",(event) =>{
  const opcaoClicada = event.target.id;
  
  if(opcaoClicada === "btn"){
    dadosFormularioLogin()
  }
  if(opcaoClicada === "voltar-login"){
  window.location.href="index.html"
  }
  event.preventDefault();
})



function dadosFormularioLogin() {
  const formulario = document.getElementsByClassName('formulario')[0];
  const dadosDoFormulario = new FormData(formulario);
  const emailLogin = dadosDoFormulario.get('email');
  const senhaDeEntradaLogin = dadosDoFormulario.get('senha');

  if (validate(emailLogin,senhaDeEntradaLogin)){
      conferindoUsuario()
  }
}

function validate(email,senha){
  if(email.legth < 4 || senha <= 8){
     alert("usuario ou senha invalido, preencha os dados corretamente")
     return false;
  }
  return true

}

function conferindoUsuario(){
  bd.comparacaoDeContas.forEach((value)=>{
    console.log(value)
  })
}




