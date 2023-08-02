import "./Cadastro.css"
import React,{useState} from "react"
 export class Cliente{

  constructor(nomeInserido,emailInserido,senhaInserido){
    this._nome = nomeInserido;
    this._email = emailInserido;
    this._senha = senhaInserido; 
  }
  
  get nomeInserido(){
    return this._nome;
  }
  get emailInserido(){
    return this._email;
  }
  get senhaInserido(){
    return this._senha;
  }
  set nomeInserido(novoNome){
   this._nome = novoNome;
  }
  set emailInserido(novoEmail){
    this._email = novoEmail;
  }
  set senhaInserido(novaSenha){
    this._senha = novaSenha;
  }
}

const Cadastro =()=>{

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const ListaDeUsuario =[]

  const descarregandoNome=(event)=>{
    setNome(event.target.value);
    event.preventDefault()
   

  };
  const descarregandoEmail=(event)=>{
    setEmail(event.target.value);
    event.preventDefault()
 
    

  };
  const descarregandoSenha=(event)=>{
    setSenha(event.target.value);
    event.preventDefault()
    
  };
  
  
  const pegandoValor = (event) => {
    const newUsuario = new Cliente(nome,email,senha)
    console.log(newUsuario) 
    ListaDeUsuario.push(newUsuario)
    event.preventDefault()
  }
  
  
 function backPage(event){
    window.location.reload()
    event.preventDefault()
  }
  return(
          <div className="planoDeFundo">
            <p id="closePage" onClick={backPage}>x</p>
            <main id="container">
       
                  <h1>Cadastre-se </h1>
                <form id="forms" name="formulario" onSubmit={pegandoValor}>
                  <label id="labelNome" htmlFor="nome">Nome</label>
                  <input id="nome" type="text" value={nome} name="nome" onChange={descarregandoNome} required/>
                  <label id="labelEmail" htmlFor="email">Email</label>
                  <input id="email" type="text" value={email} name="email" onChange={descarregandoEmail} required/>
                  <label id="labelSenha" htmlFor="senha">Senha</label>
                  <input id="senha" type="password" value={senha} name="senha" onChange={descarregandoSenha} required />
                  <div id="container-btn">
                  <input id="btn" type="submit" value="Cadastrar" />
                  <p id="voltar" onClick={backPage}>voltar</p>
                  </div>
                </form>
             
            </main>
          </div>
    
  )
}
export default Cadastro