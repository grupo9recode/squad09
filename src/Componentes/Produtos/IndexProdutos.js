import './IndexProdutos.css';
import React from 'react';

const IndexProduto = (props)=>{

    function abrirModal(){
        document.getElementById('m-modal').style.top = "0";
    }

    function fecharModal(){
        document.getElementById('m-modal').style.top = "-100%";
    }

    return(
        <>         
            <div className="col mb-3">
                <div className="card card-box">
                    <div className="card-body">
                        <div className="text-center">
                            <img src={require('../../Imagens/icon.jpg').default} className="img-fluid rounded-circle w-50 mb-3" alt="..." />
                            <h5>Maria Silva</h5>
                            <hr className="barra"></hr>
                            <h6>{props.produto}</h6>
                        </div>
                        <div className="mb-3">
                            <img src={require('../../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                            <p className="card-text">Anunciante: {props.anunciante}  </p>
                            <div className="">
                                <p className="text-center lead">Clique para mais informações.</p>
                                <button className="btn btn-sm p-botao abrir-modal" onClick={abrirModal}>DETALHES</button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>

            <div className="fundo-modal" id="m-modal">
                <div className="m-modal">
                    <span className="fechar" onClick={fecharModal}>x</span>
                    <div className="card-body">
                        <h5 className="card-title">Categoria: </h5>
                        <p className="card-text">Nome do protudo: </p>
                        <p className="card-text">Valor: {props.valor} </p>
                        <p className="card-text">Descrição do produto: {props.descricao} </p>
                        
                    </div>
                </div>
            </div>                       
        </>
    );
}

export default IndexProduto;