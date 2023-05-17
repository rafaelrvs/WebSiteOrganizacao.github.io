menuDeOpcao = document.querySelector('#menuOption')
function valueMenu(){
    menuDeOpcao.style.display = 'grid';
    setTimeout(() => {
        menuDeOpcao.style.display = "none";
      }, 3000);
}

function onSubmitLogin(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
  
    if(validate(email, senha)) {
      window.location.href='#';
    }
  }
  
  function validate(nome, senha) {
    if (nome.length==0 || senha.length ==0) {
      alert('Por favor preencha todos os campos')
      return false
    }
  
    if(nome != 'rafael' && senha !='123'){
      alert('Usuário ou senha incorretos')
      return false
    }
  
    return true
  }
  