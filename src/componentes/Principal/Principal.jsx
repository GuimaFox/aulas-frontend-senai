import React from 'react';
import BotaoContador from '../BotaoContador/BotaoContador';
import Formulario from '../Fomulario/Formulario';
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import './Principal.css';
import ListaCompras from '../ListaCompras/ListaCompras';

const Principal = () => {
const[exemplo, setExemplo] = React.useState('');

  return (
  <main>
    <nav>

    <BotaoCustomizado tipo='primario' onClick = {()=> setExemplo('listaProdutos')}>
      ListaProdutos
    </BotaoCustomizado>
    <BotaoCustomizado tipo='secundario' onClick = {()=> setExemplo('botaoContador')}>
      BotaoContador
    </BotaoCustomizado>
    <BotaoCustomizado tipo='' onClick = {()=> setExemplo('formulario')}>
      Formulário
    </BotaoCustomizado>
    <BotaoCustomizado tipo='' onClick = {()=> setExemplo('listaCompras')}>
      Lista de Compras
    </BotaoCustomizado>

    </nav>

    {exemplo === 'listaProdutos' && <ListaProdutos />}
    {exemplo === 'botaoContador' && <BotaoContador />}
    {exemplo === 'formulario' && <Formulario />}
    {exemplo === 'listaCompras' && <ListaCompras />}
    
    {/*<BotaoCustomizado
     tipo='primario'
      onClick={() => { 
      alert('Salvo com sucesso');
    }}>
      Salvar
    </BotaoCustomizado>

    <BotaoCustomizado
     tipo='secundario'
     onClick={() => { 
      alert('Salvo de novo');
    }}>
      Git</BotaoCustomizado>

    <BotaoCustomizado
    onClick={() => { 
      alert('Cancelou tudo!!!');
    }}
    >Cancelar</BotaoCustomizado>
    <BotaoContador />
    <ListaProdutos />*/}


  </main>
  );
};

export default Principal;
