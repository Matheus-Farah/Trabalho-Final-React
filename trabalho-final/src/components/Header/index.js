import { useHistory } from "react-router-dom";
import Cordeirinho from "./imagens/Cordeirinho.png";
import Botao from "../Botao";
import { HomeStyle, Container, IMG } from "./style";

const Header = () => {
  const history = useHistory();
  return (
    <HomeStyle>
      <Container>
        <div>
          <IMG src={Cordeirinho} alt="Cordeirinho" width="60" height="60" />
        </div>
        <div>
          <Botao nome="Home" onClick={() => history.push("/Home")} />
          <Botao
            nome="Quem Somos"
            onClick={() => history.push("/Quem Somos")}
          />
          <Botao nome="Carrinho" onClick={() => history.push("/Carrinho")} />
          <Botao nome="Perfil" onClick={() => history.push("/Perfil")} />
          <Botao nome="Sair" onClick={() => history.push("/")} />
        </div>
      </Container>
    </HomeStyle>
  );
};

export default Header;
