import './indexServicos.css';
import React from 'react';

const IndexServicos = (props) => {
    

    return(
            <>
                <div className="caixa-servico">
                    <img src={require('../../Imagens/Produtos/produto1.jpg').default} className="border imgServico" alt="..."/>
                    <div className="card-body border desc-servico">
                        <div className="text-break">
                            <h4 className="card-title">{props.produto}</h4>
                            <h6 className="card-substitle  text-danger">${props.valor}</h6>
                            <div className="mb-3">
                                <span className="text-muted">{props.username}</span><br></br>
                                <span className="text-muted">{props.email}</span><hr></hr>
                            </div> 
                            <p className="card-text">{props.descricao}</p>
                        </div>                      
                        <div className="botaoServico">
                            <button className="btn btn-danger m-1 btn-sm">Deletar</button>
                            <button className="btn btn-primary btn-sm">Detalhes</button>
                        </div>
                    </div>
                </div>
            </>
    );

}

export default IndexServicos;