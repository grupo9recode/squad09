import Menu from "../Componentes/Menu/Menu"

export default function CadastrarServicos() {

    const cadastrarServicos = async(evento) => {
         
        const url = "http://localhost/API/acion/cadastroservico.php";
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
        <div className='container'>
            <div className='mt-5 mb-5 p-3 border box-cadastro'>
                <h1 className="text-center text-white">Cadastrar Serviço</h1><hr></hr>
                <fomr action="/servicos" className='form-group' onSubmit={cadastrarServicos}>
                    <div className='mb-3'>
                        <label for='nome' className='form-label text-white'>SERVIÇO</label>
                        <input type='text' className='form-control' id='servico' name='servico' />
                    </div>
                    <div className='mb-3'>
                        <label for='nome' className='form-label text-white'>CATEGORIA</label>
                        <select className='form-select-lg select form-control' name='categoria'>
                            <option selected>Selecionar categoria</option>
                            <option valeu='cabeleireira'>Cabeleireira</option>
                            <option valeu='limpeza'>Limpeza</option>

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
                            <input type='text' name='valor' className='form-control' placeholder='PREÇO DO SERVIÇO' arial-label="Username" arial-describedby='basic-addon1' />
                            <span className='input-group-text' id='basic-addon1'>$</span>
                        </div>
                    </div>
                        <div className='mb-3'>
                            <label className='form-label text-white'>DESCRIÇÃO</label>
                            <div className='form-floating'>
                                <textarea className='form-control textarea' name='descricao' id='descricao'></textarea>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary' name='enviar' type='submit'>Enviar</button>
                        </div>

                    
                </fomr>
            </div>
        </div>
        </>
    )
}