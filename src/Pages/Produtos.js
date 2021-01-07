import Menu from "../Componentes/Menu/Menu"
import './Css/Produtos.css';

const Produtos = () => {
    return (
        <>
            <Menu/>
            <div className="container-fluid">
                <h3 className="text-center mt-3">Selecionar categoria aqui</h3>
                <div className="d-flex box">
                    <div className="card mt-5 m-3 border border-dark">
                        <img src={require('../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produtos de Limpeza</h5>
                            <p className="card-text">Anunciado por: </p>
                            <p className="card-text">Descrição do produto </p>
                        </div>
                    </div>

                    <div className="card mt-5 m-3 border border-dark">
                        <img src={require('../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produtos de Limpeza</h5>
                            <p className="card-text">Anunciado por: </p>
                            <p className="card-text">Descrição do produto </p>
                        </div>
                    </div>

                    <div className="card mt-5 m-3 border border-dark">
                        <img src={require('../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produtos de Limpeza</h5>
                            <p className="card-text">Anunciado por: </p>
                            <p className="card-text">Descrição do produto </p>
                        </div>
                    </div>

                    <div className="card mt-5 m-3 border border-dark">
                        <img src={require('../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produtos de Limpeza</h5>
                            <p className="card-text">Anunciado por: </p>
                            <p className="card-text">Descrição do produto </p>
                        </div>
                    </div>

                    <div className="card mt-5 m-3 border border-dark">
                        <img src={require('../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produtos de Limpeza</h5>
                            <p className="card-text">Anunciado por: </p>
                            <p className="card-text">Descrição do produto </p>
                        </div>
                    </div>

                    <div className="card mt-5 m-3 border border-dark">
                        <img src={require('../Imagens/default.jpg').default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Produtos de Limpeza</h5>
                            <p className="card-text">Anunciado por: </p>
                            <p className="card-text">Descrição do produto </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Produtos;