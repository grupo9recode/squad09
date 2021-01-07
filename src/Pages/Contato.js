import Menu from "../Componentes/Menu/Menu"
import React from 'react'
import './Css/Contato.css'


const Contato = () => {
    return (
        <>
            <Menu />
            <div className='container container-flui'>
            <div className='d mt-5  p-3  border box-menu'>
                <h1 className='text-center'>Contato</h1>
                <hr/>
                <form action='' method=''>
                    <div className="form-group">
                        <label for="nome">Nome</label>
                        <input type="name" className="form-control" id="nome" placeholder="Digite seu nome" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>

                    <div className="form-group">
                        <label for="mensagem">Example textarea</label>
                        <textarea className="form-control" id="mensagem" rows="3"></textarea>
                    </div>
                    <button type='submit' className='btn btn-lg  btn-primary'>Enviar</button>
                </form>
                </div>
                </div>
        </>
    )
}
export default Contato;