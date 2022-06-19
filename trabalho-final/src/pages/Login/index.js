import React, { useEffect, useInsertionEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../App.css";
import { Botao } from "../../components";
import { LabelError } from "./styles";
import  api  from "../../services/api";
import jwt_decode from "jwt-decode";

export const Login = () => {
  const history = useHistory();
  const [dados, setDados] = useState({
    email: "breno5@gmail.com",
    senha: "123",
  });
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [storeToken, setStoreToken] = useState({});
  const {storeEmail, setStoreEmail} = useState();

  
    const CheckLogin = () => {
    if (dados.email === "" || dados.senha === "") {
      console.log("as")
      setError("Preencha todos os campos");
      return;
    }
    
    
      
      history.push("/Home");
  };

  useEffect(()=> {
    if (dados.email === "" || dados.senha === "") {
      setError("Preencha todos os campos");
      return;
    }else{
      const getData= async() =>{
        const response = await api.post(`login`, dados);
        const decoded = jwt_decode(response.headers.authorization)
        console.log(decoded)
      }

      getData()
    }


  },)
  

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
        <LabelError>{error}</LabelError>
        <p className="Cadastro">
          Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link>
        </p>
        <Botao nome="Login" onClick={ () => CheckLogin()} />
      </header>
    </div>
  );
};

// useEffect(() => {
//     if(localStorage.getItem('myKey')) {
//       setState(localStorage.getItem('myKey');
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('myKey', state);
//   }, [state]);
