import React from "react";
import { Card } from "../../components";
import { data } from "../../data/produtos";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fundo } from "./styles";

export const Home = () => {
  return (
    <Fundo>
      <div className="container">
        <div className="row">
          {data.map((produtos) => (
            <div className="col">
              <Card
                id={produtos.id}
                key={produtos.id}
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

