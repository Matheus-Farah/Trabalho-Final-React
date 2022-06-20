import React, { useEffect, useState } from "react";
import { Container, Content} from "./styles";
import { Botao } from "../../components";
import { InputTelefone, InputCpf } from "../../components";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { data } from "../../data/produtos";



export const Produto = (props) => {
  const { id } = useParams()

  useEffect(()=> {
      //fazer
      const produtoRecebido = data.find((p) => p.id === id );
      setProduto(produtoRecebido)
  })
  const history = useHistory
  const  [produto, setProduto] = useState([])
  
  return (
      <Container>
      <div className="container">
        {/* <div className="row"> */}
        <Content>
          {/* <div className="col-sm-6  col-md-6"> */}
          <p>{produto.name}</p>
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
