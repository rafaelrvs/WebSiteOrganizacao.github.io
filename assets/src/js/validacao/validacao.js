export class Cliente {
  
  constructor( id,nome, email, senha) {
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._id = id;
  }

  // Getters e Setters

  get id() {
    return this._id;
  }
  
  set id(novoId) {
    if(novoId instanceof Cliente){
      this._id = novoId;
    }
 }



  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
     if(novoNome){
       this._nome = novoNome;
    }
  }
  get email() {
    return this._email;
  }

  set email(novoEmail) {
    if(novoEmail){
      this._email = novoEmail;
      
   }

  }

  get senha() {
    return this._senha;
  }

  set senha(novaSenha) {
    if( novaSenha.length >= 8){
      this._senha = novaSenha;
      return true
    }
    console.log('Sua senha não é forte')
    return false
  }
}