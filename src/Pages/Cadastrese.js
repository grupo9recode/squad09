import Menu from "../Componentes/Menu/Menu"
import React from 'react';


const Cadastrese = () => {
    const url = "http://localhost:3005/cadastrese";
    const [form, setForm] = React.useState({
        
        id_usuario: "",
        nome: "",
        cpf: "",
        celular: "",
        email: "",
        senha: ""
    });

    const [response, setResponse] = React.useState(null)

    function pegarInfo({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value });
    }

    function pegarDados(event) {
        fetch('http://localhost:3005/cadastrese', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((res) => {
            setResponse(res);
        })
    }

    const Enviar = () => {
        if (alert("Cadastro feito!")) {
            window.location.href='/login';
        }
    }

    return (
        <>
        
            <Menu/>
            <center><a href='/'><img src={require('../Imagens/favela.png').default} width="800" class="img-fluid" alt="Imagem responsiva"/></a></center>
            <div className="container ">
                <div className="mt-5 mb-5 p-3  border box-menu">
                    <h1 className="text-center text-dark font-weight-bold ">CADASTRE-SE</h1><hr></hr>
                <form action='/login' onSubmit={pegarDados}>
                    <div className="mb-3">
                        <label for="username" className="form-label text-dark font-weight-bold">USERNAME</label>
                        <input type="text" className="form-control" id="id_usuario" name="id_usuario" placeholder="Ex: @username" value={form.id_usuario}
                            onChange={pegarInfo}/>
                    </div>
                    <div className="mb-3">
                        <label for="nome" className="form-label text-dark font-weight-bold">NOME</label>
                        <input type="text" className="form-control" id="nome" name="nome" value={form.nome}
                            onChange={pegarInfo}/>
                    </div>
                    <div className="mb-3">
                        <label for="cpf" className="form-label text-dark font-weight-bold">CPF</label>
                        <input type="number" maxlength="11" className="form-control" id="cpf" name="cpf" value={form.cpf}
                            onChange={pegarInfo}/>
                        <span className="text-white ">Digite apenas os números</span>
                    </div>
                   
                    
                    <div className="mb-3">
                        <label for="celular" className="form-label text-dark font-weight-bold">CELULAR</label>
                        <input type="text" className="form-control" id="celular" name="celular" required value={form.celular}
                            onChange={pegarInfo}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label text-dark font-weight-bold">EMAIL</label>
                        <input type="text" className="form-control" id="email" name="email" required value={form.email}
                            onChange={pegarInfo}/>
                        </div>
                        <div className="mb-3">
                        <label for="senha" className="form-label text-dark font-weight-bold">SENHA</label>
                        <input type="password" maxlength="8" className="form-control" id="senha" name="senha" value={form.senha}
                            onChange={pegarInfo}/><span className="text-white ">Mínimo de 8 caracteres</span>
                    </div>
                    <div className="mb-3">
                        <label for="confirmaemail" className="form-label text-dark font-weight-bold">CONFIRMAR SENHA</label>
                            <input type="password" maxlength="8" className="form-control" id="confirmasenha" name="confirmasenha"/>
                            <span className="text-white ">Mínimo de 8 caracteres</span>
                    </div>
                    
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-light text-dark font-weight-bold" onClick={Enviar} >CADASTRAR</button>  
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}
export default Cadastrese;