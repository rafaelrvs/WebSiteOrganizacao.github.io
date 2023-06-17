let pageOne = document.querySelector("main");
const cadastro = document.querySelector("#cadastro");
cadastro.addEventListener("click", () => {
  //segunda pagina
  pageOne.style.display="none";
  // Cria um novo elemento div
  
let divElement = document.createElement("div");

// Define atributos para a div
divElement.id = "containerCadastro";
// Adiciona a div ao corpo do documento

document.body.appendChild(divElement);

divElement.style.background= 'linear-gradient(100deg, rgb(198, 4, 216), rgb(242, 10, 138), rgb(255, 7, 123))';
divElement.style.height='500px'
divElement.style.width='500px'
divElement.style.borderRadius='20px'

let conteudo = document.getElementById('body')
conteudo.style.display='flex';
conteudo.style.justifyContent='center'
conteudo.style.alignItems='center'
conteudo.style.flexDirection='column'
conteudo.style.gap='20px'

 

 
});