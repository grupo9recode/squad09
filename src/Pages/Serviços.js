import Menu from "../Componentes/Menu/Menu"
//import IndexServico from "../Componentes/servicos/indexServicos"
import './Css/Servicos.css';
import { GoGrabber } from "react-icons/go";
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import React from 'react'

const Servicos = () => {
    
     return (
    <>
              
        <Menu/> 
            <div className="">                
                <div className="row">
                    <div className="col-md-4 col-lg-2 col-sm-12 col-xs-12 mb-3 wrapperServico">
                        <div className="sidebarServico"> 

                            <div className="dropdown">
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

                    <div className="col-md-8 col-lg-10 col-xs-12 d-flex box-servico mb-5" id="">  
                        {/*aqui vai os produtos de IndexProdutos*/}
                    </div>
                </div>
            </div>

    </>
           
    )

}

   
export default Servicos;