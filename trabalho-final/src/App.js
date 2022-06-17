import { BrowserRouter, Route, Switch  } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { QuemSomos } from "./pages/QuemSomos";
import { Perfil } from "./pages/Perfil";
import { Carrinho } from "./pages/Carrinho";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Quem Somos" exact component={QuemSomos} />
        <Route path="/Perfil" exact component={Perfil} />
        <Route path="/Carrinho" exact component={Carrinho} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
