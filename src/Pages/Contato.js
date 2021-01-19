import Menu from "../Componentes/Menu/Menu"
import React from 'react'
import './Css/Contato.css'
import RodapeGeral from '../Componentes/Rodape/RodapeGeral'

const Contato = () => {
    return (
        <>
            <Menu />
            <div className='container container-fluid d-flex mt-5'>
            <a href='/' className='imagem-contato mr-5'><img src={require('../Imagens/onceicao.png').default} alt="" width="300"/></a>
            
            <div className=' p-3  border box-menu'>
                <h1 className='text-center text-dark font-weight-bold'>ENTRE EM CONTATO CONOSCO</h1>
                <hr/>
                <form action='' method=''>
                    <div className="form- text-dark font-weight-bold">
                        <label for="nome">NOME</label>
                        <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" name='nome'/>
                    </div>
                    <br/>
                    <div className="form- text-dark font-weight-bold">
                        <label for="email">E-MAIL</label>
                        <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" />
                    </div>
                    <br/>
                    <div className="form- text-dark font-weight-bold">
                        <label for="mensagem">MENSAGEM</label>
                        <textarea className="form-control" id="mensagem" name='mensagem' rows="3"></textarea>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-light text-dark font-weight-bold'>ENVIAR</button>
                </form>
                </div>
                </div>
                <RodapeGeral/>
        </>
    )
}
export default Contato;