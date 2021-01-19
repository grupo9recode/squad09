import './IndexProdutos.css';
import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";

const IndexProduto = (props)=>{

    return(
        <>         
                    <div className="card">
                        <div className="imgBox">
                            <img className="img-img" src={require('../../Imagens/Produtos/produto2.jpg').default} />
                        </div>
                        <div className="details">
                            <div className="text-content">
                                <h3 className="textH3">{props.produto}</h3>
                                <div className="price text-danger">{props.valor}</div>
                            </div>
                            <h4 className="textH4">{props.username}</h4>
                            <button className="btnProduto" type="button">Contato</button>
                        </div>
                        <div className="description">
                            <div className="iconProdu"><BsInfoCircleFill/></div>
                            <div className="contents">
                                <h2 className="textH2">Descriçao do produto</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>
                                    {props.email}<br/>
                                    {props.telefone}
                                </p>
                            </div>
                        </div>
                    </div>
                        
        </>
    );
}

export default IndexProduto;