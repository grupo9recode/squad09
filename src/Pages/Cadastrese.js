import Menu from "../Componentes/Menu/Menu"

const Cadastrese = () => {
    const pegarDados = async(evento) => {
        
        //fazendo a ligação com a api construída em php
        const url = "http://localhost/API/action/cadastrar.php";
        //aqui eu acho que essa const instanciando o formData ta pegando exatamente os valores que são digitados dentro do formulario
        const dados = new FormData(evento.target)
        //passando o method post que é o mesmo criado na api e no body ta chamando(??) o formData
        const cabecalho = {
            method: 'POST',
            body: dados
        }

        //fazendo o fetch pra pegar a api e depois retornando em json
        const resposta = await fetch(url, cabecalho);
        const retorno = await resposta.json();
        console.log(retorno);

        
        
        
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
                        <input type="text" className="form-control" id="username" name="username" placeholder="ex: @username"/>
                    </div>
                    <div className="mb-3">
                        <label for="nome" className="form-label text-dark font-weight-bold">NOME</label>
                        <input type="text" className="form-control" id="nome" name="nome" />
                    </div>
                    <div className="mb-3">
                        <label for="cpf" className="form-label text-dark font-weight-bold">CPF</label>
                        <input type="number" maxlength="11" className="form-control" id="cpf" name="cpf" />
                        <span className="text-white ">Digite apenas os números</span>
                    </div>
                   
                    
                    <div className="mb-3">
                        <label for="celular" className="form-label text-dark font-weight-bold">CELULAR</label>
                        <input type="text" className="form-control" id="celular" name="celular" required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label text-dark font-weight-bold">EMAIL</label>
                        <input type="text" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                        <label for="senha" className="form-label text-dark font-weight-bold">SENHA</label>
                        <input type="password" maxlength="8" className="form-control" id="senha" name="senha" /><span className="text-white ">Mínimo de 8 caracteres</span>
                    </div>
                    <div className="mb-3">
                        <label for="confirmaemail" className="form-label text-dark font-weight-bold">CONFIRMAR EMAIL</label>
                            <input type="password" maxlength="8" className="form-control" id="confirmaemail" name="confirmaemail" />
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