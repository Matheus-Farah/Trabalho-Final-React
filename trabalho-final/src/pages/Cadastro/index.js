import React from "react";
import { InputTelefone, InputCpf, Botao } from "../../components";
import "../../App.css";
import { Content, Fundo } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

export const Cadastro = () => {
    const history = useHistory();

    
  return (
    <Fundo>
      <div className="container">
        {/* <div className="row"> */}
        <Content>
          {/* <div className="col-sm-6  col-md-6"> */}
          <label>Nome:</label>
          <input type="text" />
          <label>Cpf:</label>
          <InputCpf />
          <label>Telefone:</label>
          <InputTelefone />
          <label>Data de Nascimento:</label>
          <input type="date" />
          {/* </div> */}
          {/* <div className="col-sm-6 col-md-6"> */}
          <label>Usuário:</label>
          <input type="email" />
          <label>Senha:</label>
          <input type="password" />
          <label>Nome de Usuário:</label>
          <input type="text" />
          <Botao nome="Cadastrar" onClick={() => history.push("/")}/>
          {/* </div> */}
        </Content>
        {/* </div> */}
      </div>
    </Fundo>
  );
};
