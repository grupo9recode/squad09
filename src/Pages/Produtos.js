import Menu from "../Componentes/Menu/Menu"
import IndexProduto from '../Componentes/Produtos/IndexProdutos';
import './Css/Produtos.css';
import './Css/CardsProdutos.css';
import React from 'react';
import { GoGrabber } from "react-icons/go";
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";



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
            
            <div className="container-fluid">  
                <div className="row">
                    <div className="col-md-4 col-lg-2 col-sm-12 col-xs-12 mb-3 wrapper">
                        <div className="sidebar">

                            <div className="dropdown mb-4">
                                <div className="dropdown-select">
                                    <span className="select">categorias
                                    <GoGrabber className="iconCat"/>
                                    </span>                        
                                </div>
                                <div className="dropdown-list">
                                    <div className="dropdown-list__item">Artesanato</div>
                                    <div className="dropdown-list__item">Artesanato</div>
                                    <div className="dropdown-list__item">Artesanato</div>
                                    <div className="dropdown-list__item">Artesanato</div>
                                    <div className="dropdown-list__item">Artesanato</div>
                                </div>
                            </div>  

                        </div>
                    </div>
                    <div className="col-md-8 col-lg-10 col-xs-12 d-flex box-produto mb-5" id="">  
                        {action && action.map(mapear => <IndexProduto username={mapear.username} email={mapear.email} produto={mapear.produto}   valor={mapear.valor} descricao={mapear.descricao} />)}
                    </div>
                </div>
            </div>
<RodapeGeral/>
        </>
    )
}
export default Produtos;