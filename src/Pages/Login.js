import Menu from "../Componentes/Menu/Menu"

const Login = () => {
    return (
        <>
            <Menu/>
            <div className="container">
                <div className="mt-5 border p-3 caixa">
                    <h1 className="text-center">Login</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3 d-flex">
                        <div>
                            <a href="/" className="nav-link">Esqueci minha senha</a>
                            <a href="/" className="nav-link">Cadastre-se</a>
                        </div>
                        <div className="ml-auto mt-4">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>   
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}
export default Login;