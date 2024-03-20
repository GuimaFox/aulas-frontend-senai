
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

const Principal = () => {
  return (
  <main>
    
    <BotaoCustomizado tipo="primario">Salvar</BotaoCustomizado>
    <BotaoCustomizado tipo="secundario">Git</BotaoCustomizado>
    <BotaoCustomizado>Canselar</BotaoCustomizado>

  </main>
  );
};

export default Principal;
