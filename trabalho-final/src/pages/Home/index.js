import React from "react";
import Nike from "./imagens/logo-nike-512.png"
import { Botao } from "../../components/Botao";
import { Container, HomeStyle, IMG } from "./styles";
import { useHistory } from "react-router-dom";


export const Home = () => {
    const history = useHistory();
    return(
        <HomeStyle>
        <Container>
            <IMG src={Nike} alt="Nike" width="60" height="60"/>
            <Botao nome="Quem Somos" onClick={() => history.push("/Quem Somos")}/>
            <Botao nome="Carrinho" onClick={() => history.push("/Carrinho")}/>
            <Botao nome="Perfil" onClick={() => history.push("/Perfil")}/>
            <Botao nome="Sair" onClick={() => history.push("/")}/>
        </Container>
    </HomeStyle>
    );
}