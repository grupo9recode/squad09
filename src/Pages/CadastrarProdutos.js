import Menu from "../Componentes/Menu/Menu";
import './Css/CadastrarProdutos.css';
import { FaStoreAlt } from "react-icons/fa";
//import Rodape from '../Componentes/Rodape/Rodape';
import React from 'react';

export default function CadastrarProdutos() {
        
        const url = "http://localhost:3005/cadastrarprodutos";
        const [form, setForm] = React.useState({
        username: "",
        produto: "",
        categoria: "",
        valor: "",
        descricao: ""
    });

    const [response, setResponse] = React.useState(null)

    function pegarDados({target}){
        const {id, value} = target
        setForm({...form, [id]: value})
        console.log({[id]:value});
    }

    function enviarDados(event){
        fetch('http://localhost:3005/cadastrarprodutos', {
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
            <form action="/produtos" className="form-group" onSubmit={enviarDados}>
                <div className="form-icon bg-primary">
                    <span><FaStoreAlt /></span>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="username" name="username" placeholder="@USERNAME" value={form.username} onChange={pegarDados}/>
                </div>
                <div className="mb-3">                
                    <input type="text" className="form-control" id="produto" name="produto" placeholder="SERVIÇO" value={form.produto} onChange={pegarDados}/>
                </div>
                <div className="mb-3">
                    <select className="form-select-lg select form-control" name="categoria" id='categoria' value={form.categoria} onChange={pegarDados}>
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
                        <input type="text" name="valor" id="valor" className="form-control" placeholder="PREÇO DO PRODUTO" aria-label="Username" aria-describedby="basic-addon1" value={form.valor} onChange={pegarDados}/>
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control textarea" name="descricao" id="descricao" placeholder="DESCRIÇÃO DO PRODUTO" value={form.descricao} onChange={pegarDados}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account bg-primary">Cadastrar Produto</button>
                </div>
            </form>
            <div className="social-media">   
            </div>
        </div>
            
        </>
    )
}