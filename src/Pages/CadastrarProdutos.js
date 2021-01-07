import Menu from "../Componentes/Menu/Menu"
import './Css/CadastrarProdutos.css';

export default function CadastrarProdutos() {
    return (
        <>
            <Menu/>
            <div className="container">
                <div className="mt-5 mb-5 p-3 border box-cadastro">
                        <h1 className="text-center text-white">Cadastrar Produto</h1><hr></hr>
                    <form className="form-group">
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
                            <label for="formFileSm" className="form-label text-white">IMAGEM</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>

            </div>
            
        </>
    )
}