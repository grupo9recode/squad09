import Menu from "../Componentes/Menu/Menu"
import React from 'react';
import { BsBag } from "react-icons/bs";
export default function CadastrarServicos() {

const url = "http://localhost:3005/cadastrarservicos";
const [form, setForm] = React.useState({
    
    username: "",
    produto: "",
    categoria: "",
    valor: "",
    descricao: ""

});

const [response, setResponse] = React.useState(null)

function pegarServicos({target}){
    const {id, value} = target
    setForm({...form, [id]: value})
    console.log({[id]:value});
}

function enviarServicos(event){
    fetch('http://localhost:3005/cadastrarservicos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //transforma em json para mandar pra api e api mandar pro banco
        body: JSON.stringify(form)
    }).then((res) =>{
        setResponse(res);
    })
}

    return (
        <>
    <Menu/>
        <div className="registration-form container">
            <form action="/servicos" className="form-group" onSubmit={enviarServicos}>
                <div className="form-icon bg-info">
                    <span><BsBag/></span>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="username" name="username" placeholder="@USERNAME" value={form.username} onChange={pegarServicos}/>
                </div>
                <div className="mb-3">                
                    <input type="text" className="form-control" id="servico" name="servico" placeholder="SERVIÇO" value={form.servico} onChange={pegarServicos}/>
                </div>
                <div className="mb-3">
                    <select className="form-select-lg select form-control" name="categoria" id='categoria' value={form.categoria} onChange={pegarServicos}>
                        <option selected>Selecionar categoria</option>
                        <option value="Produto de Limpeza">Produtos de Limpeza</option>
                        <option value="Vestuario">Vestuário</option>
                        <option value="Comidas">Comidas</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile"/>
                            <label className="custom-file-label" for="validatedCustomFile">Escolha o arquivo</label>
                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                    </div>
                </div>    
            
                <div className="mb-3">                             
                    <div className="input-group mb-3">
                        <input type="text" name="valor" id="valor" className="form-control" placeholder="PREÇO DO PRODUTO" aria-label="Username" aria-describedby="basic-addon1" value={form.valor} onChange={pegarServicos}/>
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control textarea" name="descricao" id="descricao" placeholder="DESCRIÇÃO DO PRODUTO" value={form.descricao} onChange={pegarServicos}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account bg-info">Cadastrar Produto</button>
                </div>
            </form>
            <div className="social-media">
                
            </div>
        </div>
        </>
    )
}