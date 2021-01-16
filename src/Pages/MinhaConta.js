import Menu from '../Componentes/Menu/Menu';
import './Css/MinhaConta.css'
import Sair from '../Sair'
import {BsPersonSquare} from 'react-icons/bs';
import {BiCommentEdit, BiBriefcase, BiFoodMenu} from 'react-icons/bi';
import {FiEdit, FiInstagram, FiFacebook, FiTwitter} from 'react-icons/fi';
const MinhaConta = () => {
    return (
        <>
            <Menu />

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10  mt-5 pt-5">
                        <div className="row z-depth-3 boxPerfil">
                            <div className="col-sm-4 bg-info rounded-left">
                                <div className="card-block text-center text-white">
                                    <BsPersonSquare className="iconMinhaConta mt-5"/>
                                    <h2 className="font-weight-bold mt-4">Name</h2>
                                    <p>Profissao</p>
                                    <FiEdit className="fiEdit mb-3"/>
                                    <ul className="list-unstyled d-flex justify-content-center mt-4">
                                        <li><a href="#"> <FiFacebook className="iconContatoConta"/> </a></li>
                                        <li><a href="#"> <FiTwitter className="iconContatoConta"/> </a></li>
                                        <li><a href="#"> <FiInstagram className="iconContatoConta"/> </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-8 bg-white rounded-right">
                                <h3 className="mt-3 text-center">Informaçoes</h3>
                                <hr className="badge-primary mt-0 w-25 ml-auto mr-auto"></hr>
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Email:</p>
                                        <h6 className="text-muted">teste@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Telefone:</p>
                                        <h6 className="text-muted">(11)997765-9090</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Username:</p>
                                        <h6 className="text-muted">@algumacoisa</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Cidade:</p>
                                        <h6 className="text-muted">Sao Paulo</h6>
                                    </div>
                                </div>
                                <hr className="bg-primary"></hr>
                                <div className="row text-center mb-3">
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold">Cadastrar Produtos</p>
                                        <h6 className="text-muted"><a href="/cadastrarprodutos"><BiFoodMenu/></a></h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold">Cadastrar Serviço</p>
                                        <h6 className="text-muted"><a href="/cadastrarservicos"><BiBriefcase/></a></h6>
                                    </div>

                                    <div className="col-sm-4">
                                        <p className="font-weight-bold">Editar Dados</p>
                                        <h6 className="text-muted"><a href="/editardados"><BiCommentEdit/></a></h6>
                                    </div>
                                </div>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>












            {/*
            <div className='container container-fluid mb-5'>
                <div className='d mt-5  p-3  border box-menu'>
                    <h1 className='text-center'>Minha conta</h1>
                    <hr />
                    <div className='text-center itens-minha-conta'>
                        <a href='editardados'><p>EDITAR DADOS</p></a>
                        <a href='cadastrarprodutos'><p>CADASTRAR PRODUTOS</p></a>
                        <a href='cadastrarservicos'><p>CADASTRAR SERVIÇOS</p></a>
                        {/*funcao sair
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
            */}
        </>
    )
}
export default MinhaConta;