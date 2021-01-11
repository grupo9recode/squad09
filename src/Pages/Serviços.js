import Menu from "../Componentes/Menu/Menu"
import IndexServico from "../Componentes/servicos/indexServicos"
import './Css/Servicos.css';
import React from 'react'

const Servicos = () => {
    const [action, setAction] = React.useState(``);
    const [user, setUser] = React.useState(``);

    async function pegarServico(){
        const url = await fetch(`http://localhost/API/api/servicos.php`);
        const urlUser = await fetch(`http://localhost/API/api/user.php`);
        
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
                    <h1 className='text-center mt-3'>Serviços</h1>
                    <h3 className='text-center mt-3'>Selecionar categoria aqui</h3>
                    <div className='d-flex box'>
                        <section id='team'>
                            <div className='container-fluid my-3 py-5'>
                                <div className='row row-cols-2'>
                                    {action && action.map(mapear => <IndexServico categoria={mapear.categoria} 
                                    produto={mapear.produto} valor={mapear.valor} descricao={mapear.descricao} anunciante={mapear.nome} />)}
                                
                                </div>
                            
                            </div>
                        
                        </section>
                    
                    </div>
                    <button onClick={pegarServico}>Ver</button>
            </>
        )

}

   
export default Servicos;