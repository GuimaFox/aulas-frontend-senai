import React from 'react';
import './Formulario.css';

const Formulario = ()=> {

const [campoNome, setCampoNome] = React. useState('');
const [numero1, setNumero1] = React. useState(0);
const [numero2, setNumero2] = React. useState(0);



//const [campoCor, setCampoCor] = React. useState('');

const alterarCampoNome = (event) => {
    //console.log(event.target.value);
    setCampoNome(event.target.value);
};

const calcular = () => {
    alert(numero1 + numero2);
};

//const alterarCampoCor = (event) => {
    //console.log(event.target.value);
    //setCampoCor(event.target.value);

//};


return (

    <div>
        <input type = 'text' value = {campoNome} onChange={alterarCampoNome} placeholder='Nome' />
        <br />
        <br />
        <input type = 'number' value = {numero1} onChange={(event)=>setNumero1(+event.target.value)} placeholder='Número 1' />
        +
        <input type = 'number' value = {numero2} onChange={(event)=>setNumero2(+event.target.value)} placeholder='Número 2' />
        =
        <button onClick={calcular}> Calcular</button>

      </div>
      //<input type = 'color' value = {campoCor} onChange={alterarCampoCor} placeholder='Cor' /> colocar dentro da DIV
    
  


);

};

export default Formulario;