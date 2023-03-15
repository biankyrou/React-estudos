import './App.css';
import HelloWorld from './componentes/HelloWorld';

function App() {

  const name = "Bianca"

  function soma(a,b){
    return a+b
  }

  const url = "https://via.placeholder.com/150"


  return (                         //não existe class em react, mas sim className
    <div className="App">                     
      <h2>Alterando o JSX</h2> 
      <p>Olá, {name} </p>
      <p>Soma: {soma(7,3)}</p>
      <img src={url} alt="minha imagem" />
      <HelloWorld/>
       
    </div>
  );
}

export default App;
