import Menu from "../Componentes/Menu/Menu"
import './Css/CadastrarProdutos.css';

export default function CadastrarProdutos() {
    const cadastrarProdutos = async(evento) => {
        
        const url = "http://localhost/API/action/cadastrarproduto.php";
        const dados = new FormData(evento.target)
        const cabecalho = {
            method: 'POST',
            body: dados
        }

        const resposta = await fetch(url, cabecalho);
        const retorno = await resposta.json();
        console.log(retorno);
    }

    return (
        <>
            <Menu/>
            <div className="container">
                <div className="mt-5 mb-5 p-3 border box-cadastro">
                        <h1 className="text-center text-white">Cadastrar Produto</h1><hr></hr>
                    <form action="/produtos" className="form-group" onSubmit={cadastrarProdutos}>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-white">PRODUTO</label>
                            <input type="text" className="form-control" id="produto" name="produto" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">CATEGORIA</label>
                            <select className="form-select-lg select form-control" name="categoria">
                                <option selected>Selecionar categoria</option>
                                <option value="Produto de Limpeza">Produtos de Limpeza</option>
                                <option value="Vestuario">Vestuário</option>
                                <option value="Comidas">Comidas</option>
                            </select>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label text-white">IMAGEM</label>
                            <input type="file" name="imagem" />
                        </div>

                        <div className="mb-3"> 
                            <label className="form-label text-white">VALOR</label>
                            <div className="input-group mb-3">
                                <input type="text" name="valor" className="form-control" placeholder="PREÇO DO PRODUTO" aria-label="Username" aria-describedby="basic-addon1" />
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label text-white">DESCRIÇÃO</label>
                            <div className="form-floating">
                                <textarea className="form-control textarea" name="descricao" id="descricao"></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary" name="enviar" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}