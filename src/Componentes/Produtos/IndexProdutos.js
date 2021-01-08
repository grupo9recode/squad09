
const IndexProduto = (props)=>{
    return(
        <>
            <div className="card mt-5 m-3 border border-dark">
                <img src={require('../../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Categoria: {props.categoria}</h5>
                    <p className="card-text">Nome do protudo: {props.produto}</p>
                    <p className="card-text">Valor: {props.valor} </p>
                    <p className="card-text">Descrição do produto: {props.descricao} </p>
                    <p className="card-text">Anunciante: {props.anunciante}  </p>
                </div>
            </div>
        </>
    );
}

export default IndexProduto;