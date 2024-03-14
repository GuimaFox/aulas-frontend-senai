import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo';
import Rodape from './componentes/Rodape/Rodape';
import Principal from './componentes/Principal/Principal';
function App() {
  console.log('App render...');

  return (
    <>
      <Cabecalho />
      <LadoEsquerdo />
      <Principal/>
      <Rodape />
    </>
  );
}

export default App;
