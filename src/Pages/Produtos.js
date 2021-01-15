import Menu from "../Componentes/Menu/Menu"
import IndexProduto from '../Componentes/Produtos/IndexProdutos';
import './Css/Produtos.css';
import React from 'react';


const Produtos = () => {
    const [action, setAction] = React.useState('');
    const [user, setUser] = React.useState('');
    
    React.useEffect(async()=>{

    
        const url = await fetch('http://localhost/API/api/produtos.php');
        const urlUser = await fetch('http://localhost/API/api/user.php');
        
        const urlResponse = await url.json();
        const userResponse = await urlUser.json();


        setAction(urlResponse);
        console.log(action);

        setUser(userResponse);
        console.log(user);
    }, []);

    return (
        <>
            <Menu/>
    
            <div className="jumbotron image">
                <h5 className="text-center">ALGUMA COISA AQUI TIPO FOTO COM DESCRIÇÃO DE ALGO</h5>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-2 col-sm-12 col-xs-12">
                        <div className="mb-2 boxBotao">
                            <button className="btn botaoCategoria">Artesanato</button>
                            <button className="btn botaoCategoria">Bijouteria</button>
                            <button className="btn botaoCategoria">Beleza</button>
                            <button className="btn botaoCategoria">Limpeza</button>
                        </div>
                        <div className="border mt-5">
                            <img className="imgCategoria" src={require('../Imagens/teste.jpg').default}/>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-10 col-xs-12 d-flex box-produto mb-5" id="">
                        {action && action.map(mapear => <IndexProduto username={mapear.username} produto={mapear.produto}   valor={mapear.valor} descricao={mapear.descricao} />)}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Produtos;