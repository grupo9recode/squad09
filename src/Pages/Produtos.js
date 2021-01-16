import Menu from "../Componentes/Menu/Menu"
import IndexProduto from '../Componentes/Produtos/IndexProdutos';
import './Css/Produtos.css';
import React from 'react';
import { GoGrabber } from "react-icons/go";
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";



const Produtos = () => {
    const [action, setAction] = React.useState('');
    
    React.useEffect(async()=>{

        const url = await fetch('http://localhost:3005/produtos');    
        const urlResponse = await url.json();

        setAction(urlResponse);
        console.log(action);
    }, []);

    return (
        <>
            <Menu/>
            
            <div className="">
                
                <div className="row">
                    <div className="col-md-4 col-lg-2 col-sm-12 col-xs-12 mb-3 wrapper">
                        <div className="sidebar">

                            <div className="dropdown text-center">
                                <button className="btn btn-secondary dropdown-toggle mb-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>Lista de Categoria</span>
                                </button>
                                <ul className="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Artesanato</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Limpeza</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Beleza</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Comidas</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Vestuário</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Eletrônicos</a></li>
                                </ul>
                            </div>

                            <div className="redeSocial border-bottom p-2">
                                <a href="#"><AiOutlineFacebook /></a>
                                <a href="#"><AiFillTwitterSquare /></a>
                                <a href="#"><AiOutlineInstagram /></a>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-10 col-xs-12 d-flex box-produto mb-5" id="">  
                        {action && action.map(mapear => <IndexProduto username={mapear.username} email={mapear.email} produto={mapear.produto}   valor={mapear.valor} descricao={mapear.descricao} />)}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Produtos;