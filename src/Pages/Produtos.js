import Menu from "../Componentes/Menu/Menu"
import IndexProduto from '../Componentes/Produtos/IndexProdutos';
import './Css/Produtos.css';
import React from 'react';
import { GoGrabber } from "react-icons/go";
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";



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
                    <div className="col-md-4 col-lg-2 col-sm-12 col-xs-12 mb-3 wrapper">
                        <div className="sidebar">
                                <h5>Categorias</h5>
                                <ul>
                                    <li><a href="#" className="nav-link"><GoGrabber className="fc"/>Artesanato</a></li>
                                    <li><a href="#" className="nav-link"><GoGrabber className="fc"/>Limpeza</a></li>
                                    <li><a href="#" className="nav-link"><GoGrabber className="fc"/>Beleza</a></li>
                                    <li><a href="#" className="nav-link"><GoGrabber className="fc"/>Comidas</a></li>
                                    <li><a href="#" className="nav-link"><GoGrabber className="fc"/>Vestuário</a></li>
                                    <li><a href="#" className="nav-link"><GoGrabber className="fc"/>Eletronicos</a></li>
                                </ul>

                                <div className="redeSocial ">
                                    <a href="#"><AiOutlineFacebook /></a>
                                    <a href="#"><AiFillTwitterSquare /></a>
                                    <a href="#"><AiOutlineInstagram /></a>
                                </div>

                                <div>
                                    <img src={require('../Imagens/teste.jpg').default} className="imgCategoria"/>
                                </div>
                            
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