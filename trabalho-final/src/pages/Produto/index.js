import React, { useContext, useEffect, useState } from "react";
import { Container, Content} from "./styles";
import { Botao } from "../../components";
import { InputTelefone, InputCpf } from "../../components";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
// import { data } from "../../data/produtos";
import api from "../../services/api";
import { DataContext } from "../../providers/auth";



export const Produto = (props) => {
  const { id } = useParams()
  const { token } = useContext(DataContext);
  

     const [produto, setProduto] = useState([]);
     console.log(produto);

     const fetchprodutos = async () => {
       const { data } = await api.get(`produto/${id}`, { headers: { Authorization: token } });
       const products = data
       setProduto(products);
     };
  useEffect(()=> {
      fetchprodutos();
      // const produtoRecebido = produtos.find((p) => p.id === id );
      
  })
  const history = useHistory
  
  return (
      <Container>
      <div className="container">
        {/* <div className="row"> */}
        <Content>
          {/* <div className="col-sm-6  col-md-6"> */}
          <p>{produto.nome}</p>
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
      </Container>
  );
};
