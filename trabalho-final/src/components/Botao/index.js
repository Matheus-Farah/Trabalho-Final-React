import React from "react";
import { BotaoStyle } from "./styles";

export const Botao = ({nome, onClick}) => {
  
  return <BotaoStyle onClick={onClick}>{nome}</BotaoStyle>;
};
