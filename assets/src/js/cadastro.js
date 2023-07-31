import { bd } from "./bd/bd.js";
import { Cliente } from "./validacao/validacao.js";
let id =1;
let listaDeUsuario = []


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
  var regexCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  
  if (!regexCaractereEspecial.test(senhaDeEntrada)) {
    alert('A senha deve conter pelo menos um caractere especial (por exemplo, !@#$%^&*)');
    return false; // Impede o envio do formulário caso a validação falhe
  }
  
  if(nome === null|| email === null || nome.length < 4 || email.length < 4 ){
    alert("preencha todos os campos")
  }
  else{
    criaUSuario(nome,email,senhaDeEntrada)
    return true; 
    
  }     
  
  
  
}


function criaUSuario(nome,email,senhaDeEntrada){
  let click = true;
  
  while(click){ 
    const newUsuario = new Cliente(id,nome,email,senhaDeEntrada)
    id++
     bd.enviandoContas(newUsuario)
    window.location.href="login.html"
    click= false;
  }
  
}

  export default listaDeUsuario