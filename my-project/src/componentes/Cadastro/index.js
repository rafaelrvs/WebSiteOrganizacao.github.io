import "./Cadastro.css"
import React,{useState} from "react"
export class Cliente{
  constructor(nome,email,senha){
    this._nome = nome;
    this._email = email;
    this._senha = senha; 
  }
  


  get nome(){
    return this._nome;
  }
  get email(){
    return this._email;
  }
  get senha(){
    return this._senha;
  }
  set nome(novoNome){
   this._nome = novoNome;
  }
  set email(novoEmail){
   this._email = novoEmail;
  }
  set senha(novaSenha){
   this._senha = novaSenha;
  }
}

const Cadastro =()=>{

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');



  const descarregandoNome=(event)=>{
    setNome(event.target.value);
  };
  const descarregandoEmail=(event)=>{
    setEmail(event.target.value);

  };
  const descarregandoSenha=(event)=>{
    setSenha(event.target.value);
  };

  
  const pegandoValor = (event) => {
   const newUsuario = new Cliente(nome,email,senha)
   console.log(newUsuario) 
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