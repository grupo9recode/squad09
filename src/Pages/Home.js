import Menu from "../Componentes/Menu/Menu";
import './Css/Home.css'

function Home() {
    return (
        <div className="corpo">
            <Menu />
            
            
            <div className="container ">
            <a href='/'><img src={require('../Imagens/unidas.png').default} class="img-fluid" alt="Imagem responsiva" width="50%" /></a>
        
                <div className='info-projeto mt-5'>
                
                    <div className='sobre-projeto '>
                        <h2>Sobre o projeto</h2>
                        <p>
                            O projeto foi desenvolvido para
                            </p>
                    </div>
                    <div className='sobre-projeto '>
                        <h2>Para quem é o projeto</h2>
                        <p>
                            O projeto foi desenvolvido para
                            </p>
                    </div>
                    <div className='sobre-projeto '>
                        <h2>Como funciona o projeto</h2>
                        <p>
                            O projeto foi desenvolvido para
                            </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;