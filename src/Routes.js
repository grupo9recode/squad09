import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Login from './Pages/Login';
import Servicos from './Pages/Serviços';
import Cadastrese from './Pages/Cadastrese';
import Produtos from './Pages/Produtos';
import NotFound from './Pages/NotFound';
const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Home} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/servicos" component={Servicos} />
                <Route exact path="/cadastrese" component={Cadastrese} />
                <Route exact path="/produtos" component={Produtos} />
                <Route  component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
}
export default Rotas;