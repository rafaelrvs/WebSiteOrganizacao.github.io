import "./App.css";
import Botao from "./componentes/Botao";
import CirculoLogo from "./componentes/CirculoLogo";
import Logo from "./componentes/Logo";
import React, { useState } from "react";
import Cadastro from "./componentes/PlanoDeFundo";



function App() {
const  [activePageBox,setactivePageBox] = useState(false)

function activePageBoxInterative(event){
  setTimeout(()=>{
    setactivePageBox(false)
    
  },50000)
  setactivePageBox(true)
  event.preventDefault()
}

  return (
    <div className="App">
      <div id="menuLateral">
        <Logo />
        <div id="btn" onClick={activePageBoxInterative}>
          <Botao>Sing-up</Botao>
        </div>
      </div>
      <main>
        <div className="container-title">
          <h1 id="title">Organize-se</h1>
          <CirculoLogo />
        </div>
      </main>
      {activePageBox && < Cadastro/>}
    </div>
  );
}

export default App;
