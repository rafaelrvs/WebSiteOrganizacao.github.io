import './App.css';
import Botao from './componentes/Botao';
import CirculoLogo from './componentes/CirculoLogo';
import Logo from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <header> <Logo/></header>
       <main>
          <CirculoLogo/>
      </main>
 
        <Botao >Sing-up</Botao>
     
    </div>
  );
}

export default App;
