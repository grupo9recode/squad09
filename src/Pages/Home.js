import Menu from "../Componentes/Menu/Menu";
import './Css/Home.css'

function Home() {
    return (
        <div className="corpo">
            <Menu />
            <div className="container ">
                <div className="d-flex mt-5 box-pai">
                    <div className="box-filho produtos p-3 ">
                        <a href='/produtos'><img src={require('../Imagens/Serviço.png').default} alt="..." /><br/>Produtos</a>
                    </div>
                    <div className="box-filho servicos  p-3 ">
                        <a href='/servicos'><img src={require('../Imagens/Serviço.png').default} alt="..." /><br/>Serviços</a>
                    </div>


                </div>
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