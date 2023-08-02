import "./App.css";
import Botao from "./componentes/Botao";
import CirculoLogo from "./componentes/CirculoLogo";
import Logo from "./componentes/Logo";
import React, { useState } from "react";
import Cadastro from "./componentes/Cadastro";
import Login from "./componentes/Login";



function App() {
const  [activePageBox,setactivePagecadastro] = useState(false)
const [activePageLogin,setactivePageLogin] = useState(false)



function loginAtivo(event){
  const valorClicado = event.target.id
  if(valorClicado ==="register"){
  setactivePagecadastro(true)
  setactivePageLogin(false)
  setTimeout(()=>{
    setactivePagecadastro(false)

  },50000)
  }
  else{
    setactivePagecadastro(false)
    setactivePageLogin(true)
    setTimeout(()=>{
      setactivePageLogin(false)
    },50000)
  }
    event.preventDefault()

}


  return (
    <div className="App">
      <div id="menuLateral">
        <Logo />
        <div onClick={loginAtivo} id="btn">
          <Botao >Sing-up</Botao>
            <p id='register'> Register</p>
          <div>
          </div>
        </div>
      </div>
      <main>
        <div className="container-title">
          <h1 id="title">Organize-se</h1>
          <CirculoLogo />
        </div>
      </main>
      {activePageBox && < Cadastro/>}
      {activePageLogin&& <Login/>}
    </div>
  );
}

export default App;
