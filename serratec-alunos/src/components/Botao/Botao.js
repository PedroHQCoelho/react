import { BotaoEstilo } from "./Styles";

const Botao = (props) => {
    const showMessage = () => {
      alert('Clicou');
    }
   
    return (
      <BotaoEstilo
        onClick={showMessage}
      >
        {props.children}
      </BotaoEstilo>
    );
  };
  
  export default Botao;