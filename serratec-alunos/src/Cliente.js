import Botao from './components/Botao/Botao';
import BotaoClasse from './BotaoClasse';
import "./Cliente.css";

const Cliente = ({ nome }) => {
  const divStyle = {
    backgroundcolor: "aqua",
    border: "3px solid red",
    margin: "15px"
  }
  
  return (
    <div className="divStyle">
      <h1>Dados do cliente</h1>
      <p>Nome: {nome}</p>
      
      
      
      <Botao>Cadastrar</Botao>
      <Botao>Editar</Botao>
      <BotaoClasse>Deletar</BotaoClasse>


    </div>
  );
};

export default Cliente;