import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
import React from 'react'
const Login = () => {
    

    // puxar o bd e tentar validar
    const [action, setAction] = React.useState([]);
    
    React.useEffect(async()=>{

        const url = await fetch('http://localhost:3005/login');    
        const urlResponse = await url.json();
        
        console.log(JSON.stringify(urlResponse));
        setAction(urlResponse);
        

    }, []);
    
    console.log(action[0])
    let validacao = action.filter(item => item.email == document.getElementById("email").value)
        console.log(validacao)
    
    const validar=()=> {
        // document.getElementById("email").value !== '' && document.getElementById("senha").value !== '' 
        
        let validacao = action.filter(item => item.email === document.getElementById("email").value)
        console.log(validacao[0])
        if (document.getElementById("email").value !== '' && document.getElementById("senha").value !== '') {
            alert('Login efetuado!')
            localStorage.setItem('key', true);
            
        } else {
            // condição para verificar e colocar no localstorage
            alert("Acesso negado")  
        };   
    }
    if (localStorage.getItem('key')) {
        window.location='/minhaconta'
    }
    return (
        <>
            <Menu/>
            <div className="container ">
                <div className="mt-5  p-3 border box-menu">
                    <h1 className="text-center text-dark font-weight-bold">FAZER LOGIN</h1>
                    <hr/>
                <form action='' method='get' >
                    <div className="mb-3">
                        <label for="email" className="form-label text-dark font-weight-bold">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="senha" className="form-label text-dark font-weight-bold">Senha</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3 d-flex">
                        <div>
                            <a href="/esqueciminhasenha" className="nav-link text-dark font-weight-bold">Esqueci minha senha</a>
                            <a href="/cadastrese" className="nav-link text-dark font-weight-bold">Cadastre-se</a>
                        </div>
                        <div className="ml-auto mt-4">
                                <button type="submit" onClick={validar} className="btn btn-light text-dark font-weight-bold">ENTRAR</button>
                        </div>   
                    </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}
export default Login;