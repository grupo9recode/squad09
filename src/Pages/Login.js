import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
const Login = () => {
    return (
        <>
            <Menu/>
            <div className="container ">
                <div className="mt-5  p-3 border box-menu">
                    <h1 className="text-center">Login</h1>
                    <hr/>
                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="senha" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3 d-flex">
                        <div>
                            <a href="/esqueciminhasenha" className="nav-link">Esqueci minha senha</a>
                            <a href="/cadastrese" className="nav-link">Cadastre-se</a>
                        </div>
                        <div className="ml-auto mt-4">
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>   
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}
export default Login;