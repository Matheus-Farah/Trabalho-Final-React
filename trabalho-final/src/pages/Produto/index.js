import React, { useContext, useEffect, useState } from "react";
import { Container, Content} from "./styles";
import { Botao } from "../../components";
import { InputTelefone, InputCpf } from "../../components";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
import api from "../../services/api";
import { DataContext } from "../../providers/auth";




export const Produto = (props) => {
  const { id } = useParams()
  const { token } = useContext(DataContext);
  const { carrinho, handleAddCarrinho } = useContext(DataContext);
  

     const [produto, setProduto] = useState([]);
     

     const fetchprodutos = async () => {
       const { data } = await api.get(`produto/${id}`, { headers: { Authorization: token } });
       const products = data
       setProduto(products);
     };

     const addProduto = (produto, quantidade) => {
      
      handleAddCarrinho(produto, 15);
     }
  useEffect(()=> {
      fetchprodutos();
      // const produtoRecebido = produtos.find((p) => p.id === id );
      
  })
  const history = useHistory
  
  return (
      <Container>
      <div className="container">

        <Content>

          <p>{produto.nome}</p>
          <input type="text" />
          <label>Cpf:</label>
          <InputCpf />
          <label>Telefone:</label>
          <InputTelefone />
          <label>Data de Nascimento:</label>
          <input type="date" />
          <label>Usuário:</label>
          <input type="email" />
          <label>Senha:</label>
          <input type="password" />
          <label>Nome de Usuário:</label>
          <input type="text" />
          <Botao nome="Adicionar ao Carrinho" onClick={() => addProduto(produto, 15)}/>

        </Content>

      </div>
      </Container>
  );
};
