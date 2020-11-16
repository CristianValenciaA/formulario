  
import logo from './logo.svg';
import './App.css';
import {OtroComponente, OtroComponenteMas, ComponentePrueba} from './OtroComponente';

function App() {
  return (
    
    <div className="App">
      {/* Esto es JSX */}    
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.
        </a>
        <img src={logo} className="App-logo" alt="logo" />

        <OtroComponente />
        <h3> Probando componente numero 2       
          < ComponentePrueba />
        </h3> 
        <OtroComponenteMas />
      </header>
    </div>
  );
}

export default App;