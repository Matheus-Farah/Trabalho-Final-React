import { Card } from "../../components";
import { data } from "../../data/produtos";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fundo } from "./styles";
import { useContext } from "react";
import { DataContext } from "../../providers/auth";
import api from "../../services/api";


export const Home = () => {
  const { token } = useContext(DataContext);
  console.log(token);

  const getProdutos = async() =>{
    const { produtos }= await api.get(`produto`, { headers: { Authorization: token } });
    console.log(produtos)
  }

  getProdutos();

  return (
    <Fundo>
      <div className="container">
        <div className="row">
          {data.map((produtos) => (
            <div className="col" key={produtos.id}>
              <Card
                id={produtos.id}
                nome={produtos.name}
                preco={produtos.preco}
                imagem={produtos.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </Fundo>
  );
};

