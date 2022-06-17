import React from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import { Botao } from "../../components/Botao";

export const Login = () => {
  const history = useHistory();


  return (
    <div className="App">
      <header className="App-header">
        <label>Usuário:</label>
        <input type="email" />
        <label>Senha:</label>
        <input type="text" />
        <Botao nome="Login" onClick={() => history.push("/Home")} />
      </header>
    </div>
  );
};
