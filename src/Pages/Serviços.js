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

                            <div className="dropdown text-center">
                                <button className="btn btn-primary dropdown-toggle mb-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>Lista de Categoria</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Manicure</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Pedicure</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Babás</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Limpeza</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Professoras</a></li>
                                    <li><a className="dropdown-item nav-link" href="#"><GoGrabber className="fc"/>Costureiras</a></li>
                                </ul>
                            </div>
                            
                           <div className="redeSocial border-bottom p-2">
                                <a href="#"><AiOutlineFacebook /></a>
                                <a href="#"><AiFillTwitterSquare /></a>
                                <a href="#"><AiOutlineInstagram /></a>
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