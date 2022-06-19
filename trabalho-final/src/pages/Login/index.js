import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import { Botao } from "../../components";
import { labelError } from "./styles";

export const Login = () => {
  const history = useHistory();
  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");

  const CheckLogin = () => {
    if (!dados.email | !dados.senha) {
      setError("Preencha todos os campos");
      return;
    }
    return;
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>Usuário:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={dados.email}
          onChange={(e) => [setDados(e.target.value), setError("")]}
        />
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={dados.senha}
          onChange={(e) => [setDados(e.target.value), setError("")]}
        />
        <labelError>{error}</labelError>
        <p className="Cadastro">
          Não tem uma conta? <a href="/Cadastro">Cadastre-se</a>
        </p>
        <Botao nome="Login" onClick={ () => [{CheckLogin}, history.push("/Home")]} />
      </header>
    </div>
  );
};
