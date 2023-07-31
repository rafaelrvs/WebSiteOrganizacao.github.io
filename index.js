const btn = document.querySelector("#btn-and-register");

btn.addEventListener("click",(event) =>{
  const valor = event.target.id;
 
  if(valor === "btn"){
   window.location.href="login.html"
   event.preventDefault();

  }
  if(valor === "cadastro"){
    window.location.href="cadastro.html"
    event.preventDefault();

  }

})


