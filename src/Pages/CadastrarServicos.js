import Menu from "../Componentes/Menu/Menu"
<<<<<<< HEAD
import React from 'react'
export default function CadastrarServicos() {

    // const cadastrarServicos = async (evento) => {

    //     const url = "http://localhost/API/acion/cadastroservico.php";
    //     const dados = new FormData(evento.target)
    //     const cabecalho = {
    //         method: 'POST',
    //         body: dados
    //     }

    //     const resposta = await fetch(url, cabecalho);
    //     const retorno = await resposta.json();
    //     console.log(retorno);
    // }
    const [form, setForm] = React.useState({
        servico: "",
        categoria: "",
        valor: "",
        descricao: ""
    })
    const [response, setResponse]=React.useState(null)
    function handleChange({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({...form, [id]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3005/cadastrarservicos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((resposta) => {
            setResponse(resposta);
        })
        
    }

    return (
        <>
            <Menu />
            <div className='container'>
                <div className='mt-5 mb-5 p-3 border box-cadastro'>
                    <h1 className="text-center text-white">Cadastrar Serviço</h1><hr></hr>
                    <form action="/servicos" className='form-group' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label for='nome' className='form-label text-white'>SERVIÇO</label>
                            <input type='text' className='form-control' id='servico' name='servico' value={form.nome}
                            onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label for='nome' className='form-label text-white'>CATEGORIA</label>
                            <select className='form-select-lg select form-control' name='categoria' id='categoria' value={form.categoria}
                            onChange={handleChange} required>
                                <option selected>Selecionar categoria</option>
                                <option valeu='alimentação'>Alimentação</option>
                                <option valeu='construcao e reforma'>Construção e reforma</option>
                                <option valeu='educacao'>Educação</option>
                                <option valeu='informatica'>Informática</option>
                                <option valeu='moda'>Moda</option>
                                <option valeu='salao'>Salão de beleza</option>
                                <option valeu='servicos domesticos'>Serviços domésticos</option>
                                <option valeu='transporte'>Transporte</option>
                                <option valeu='outros'>Outros</option>
                            </select>

                        </div>

                        <div className="mb-3">
                            <label className='form-label text-white'>IMAGEM</label>
                            <div className='custom-file'>
                                <input type='file' className='custom-file-input' id='validatedCustomFile' />
                                <label className='custom-file-label' for='validateCustomFile'>Escolha o arquivo</label>
                                <div className='invalid-feedback'>Exemple invalid custom file feedback</div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label text-white'>Valor</label>
                            <div className='input-group mb-3'>
                                <input type='number' name='valor' id='valor' className='form-control' placeholder='PREÇO DO SERVIÇO' arial-label="Username" arial-describedby='basic-addon1' value={form.valor}
                            onChange={handleChange} required/>
                                <span className='input-group-text' id='basic-addon1'>$</span>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label text-white'>DESCRIÇÃO</label>
                            <div className='form-floating'>
                                <textarea className='form-control textarea' name='descricao' id='descricao' value={form.descricao}
                            onChange={handleChange} required></textarea>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary' name='enviar' type='submit'>Enviar</button>
                        </div>


                    </form>
                    {response && response.ok && alert("Pedido enviado")}
                </div>
=======
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
                
>>>>>>> 13dc84f4f56f67d4c27054f4ed55f92c4fdf9ed7
            </div>
        </>
    )
}