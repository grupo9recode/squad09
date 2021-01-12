import Menu from '../Componentes/Menu/Menu';
import './Css/MinhaConta.css'
import Sair from '../Sair'
const MinhaConta = () => {
    return (
        <>
            <Menu />
            <div className='container container-fluid mb-5'>
                <div className='d mt-5  p-3  border box-menu'>
                    <h1 className='text-center'>Minha conta</h1>
                    <hr />
                    <div className='text-center itens-minha-conta'>
                        <a href='editardados'><p>EDITAR DADOS</p></a>
                        <a href='cadastrarprodutos'><p>CADASTRAR PRODUTOS</p></a>
                        <a href='cadastrarservicos'><p>CADASTRAR SERVIÇOS</p></a>
                        {/*funcao sair*/}
                        <a onClick={Sair}><p>SAIR</p></a>
                    </div>
                </div>
                <div className="container text-center mt-5 box-minhas-vendas pt-3">
                    <h2>Minhas vendas</h2>
                    <hr />
                    <div className="container-fluid p-4 d-flex flex-wrap">
                        <div className="card text-white bg-warning mb-3 " >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MinhaConta;