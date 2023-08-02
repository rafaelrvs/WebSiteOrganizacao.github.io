import { useState } from "react";
import "./Login.css"
import  Cliente  from "../Cadastro";
class UsuarioLogin{
  constructor(emailLogin,senhaLogin){

    this._emailLogin =emailLogin;
    this._senhaLogin = senhaLogin;
  }


  get emailLogin(){
    return this._emailLogin;
  }
  get senhaLogin(){
    return this._senhaLogin;
  }
 
  set email(novoEmail){
   this._emailLogin = novoEmail;
  }
  set senha(novaSenha){
   this._senhaLogin = novaSenha;
  }

} 
const Login = () =>{
const [emailDigitado,setEmailDigitado] = useState('')
const [senhaDigitada,setsenhaDigitada] = useState('')

  function  descarregandoNomeLogin(event){
    setEmailDigitado(event.target.value)
    event.preventDefault()

  }
   function descarregandoSenhaLogin(event){
    setsenhaDigitada(event.target.value)
    event.preventDefault()
    
  }
  
  const descarregandoValores = (event) => {
    const usuario = new UsuarioLogin(emailDigitado, senhaDigitada);
    console.log(usuario.emailLogin,Cliente.e); // Usando usuario.emailLogin e Cliente.Email
    event.preventDefault();
  };
  
  /*
  function validate(email1, email2) {
    if (email1 === email2) {
      alert('Login bem-sucedido!');
    } else {
      console.log(email2)
      alert('Email ou senha inválidos.');
    }
  }
  
*/



  function backPage(event){
    window.location.reload()
    event.preventDefault()
  }
  return(
    <div className="container-login">
           <p id="closePage" onClick={backPage}>x</p>
      <form action="" onSubmit={descarregandoValores}>
        <label  id="nomeEmail"  htmlFor="nomeEmail">Email</label>
        <input id="loginEmail" value={emailDigitado}  name="nomeEmail" type="text" placeholder="Digite o Email" onChange={descarregandoNomeLogin} required/>
        <label id="nomeSenha"  value={senhaDigitada} htmlFor="nomeSenha">Senha</label>
        <input id="loginSenha"   name="nomeSenha" type="password"placeholder="Senha" onChange={descarregandoSenhaLogin}required/>
        <input id="btnLogin" type="submit" />
      </form>

    </div>
  )
}
export default Login