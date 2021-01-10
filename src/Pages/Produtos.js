import Menu from "../Componentes/Menu/Menu"
import IndexProduto from "../Componentes/Produtos/IndexProdutos";
import './Css/Produtos.css';
import React from 'react';


const Produtos = () => {
    const [action, setAction] = React.useState('');
    const [user, setUser] = React.useState('');
    
    async function pegarProdutos(){
        const url = await fetch('http://localhost/API/api/produtos.php');
        const urlUser = await fetch('http://localhost/API/api/user.php');
        
        const urlResponse = await url.json();
        const userResponse = await urlUser.json();


        setAction(urlResponse);
        console.log(action);

        setUser(userResponse);
        console.log(user);
    }

    return (
        <>
            <Menu/>
                <h3 className="text-center mt-3">Selecionar categoria aqui</h3>
                <div className="d-flex box">

                    <section id="team">
                        <div className="container-fluid my-3 py-5">   
                            <div className="row row-cols-2">      
                                {action && action.map(mapear => <IndexProduto categoria={mapear.categoria} produto={mapear.produto} valor={mapear.valor} descricao={mapear.descricao} anunciante={mapear.nome} />)}
                            </div>
                        </div>
                    </section>
                        
                </div>        
                    <button onClick={pegarProdutos}>Ver</button>
        </>
    )
}
export default Produtos;