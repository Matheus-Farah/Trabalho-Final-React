import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { QuemSomos } from "./pages/QuemSomos";
import { Perfil } from "./pages/Perfil";
import { Carrinho } from "./pages/Carrinho";
import { Produto } from "./pages/Produto";
import { Header, Footer } from "./components";
import { Cadastro } from "./pages/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Cadastro" exact component={Cadastro} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Produto/:id" component={Produto} />
          <Route path="/Quem Somos" exact component={QuemSomos} />
          <Route path="/Perfil" exact component={Perfil} />
          <Route path="/Carrinho" exact component={Carrinho} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
