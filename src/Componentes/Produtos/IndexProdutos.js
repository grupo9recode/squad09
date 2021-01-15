import './IndexProdutos.css';
import React from 'react';
import Autenticacao from '../../Autenticacao'

const IndexProduto = (props)=>{

<<<<<<< HEAD
    return(
        <>         
                <div className="caixa-produto">
                    <img src={require('../../Imagens/Produtos/produto1.jpg').default} className="border imgProduto" alt="..."/>
                    <div className="card-body border desc-produto">
                        <h4 className="card-title">{props.produto}</h4>
                        <h6 className="card-substitle  text-danger">${props.valor}</h6>
                        <span className="text-muted">{props.username}</span>
                        <p className="card-text">{props.descricao}</p>
                        
                        <div className="botaoDescricao">
                            <button className="btn btn-danger m-1 btn-sm">Deletar</button>
                            <button className="btn btn-primary btn-sm">Detalhes</button>
=======
    function abrirModal(){
        document.getElementById('m-modal').style.top = "0";
    }

    function fecharModal(){
        document.getElementById('m-modal').style.top = "-100%";
    }

    function deletar() {
       window.confirm('Deseja deletar este produto?')
        
    }
    return(
        <>         
            
            <div className="col mb-3">
                <div className="card card-box">
                    <div className="card-body">
                        <div className="text-center">
                            <img src={require('../../Imagens/icon.jpg').default} className="img-fluid rounded-circle w-50 mb-3" alt="..." />
                            <h5>{props.username}</h5>
                            <hr className="barra"></hr>
                            <h6>{props.produto}</h6>
                        </div>
                        <div className="mb-3">
                            <img src={require('../../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                            <div className="">
                                <p className="text-center lead">Clique para mais informações.</p>
                                <div className='d-flex'>
                                {Autenticacao() && <button className='btn btn-danger' onClick={deletar}>Deletar</button>}
                                    <button className="btn btn-sm p-botao abrir-modal m-auto" onClick={abrirModal}>DETALHES</button> 
                                    
                                    </div>
                            </div>  
>>>>>>> ff9ccbfbdd30e04474d895d22b132b99971bcdc6
                        </div>
                    </div>
                </div>        
        </>
    );
}

export default IndexProduto;