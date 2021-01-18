import Menu from "../Componentes/Menu/Menu";
import './Css/Home.css';

function Home() {
    return (
        <>
        <Menu />
        <div className="corpo">
            
            
            
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
                    <div className="carousel-item">
                        <img className="d-block  imgHome" src={require('../Imagens/bebe.png').default} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div><hr />

        <div className="text-center col-lg-12 col-sm-12 col-md-6">
            <h1>ALGUMA INFORMAÇÃO  AQUI</h1>
            <h1>ALGUMA INFORMAÇÃO  AQUI</h1>
            <h1>ALGUMA INFORMAÇÃO  AQUI</h1>
        </div><hr />

        <div className="col-lg-12 col-sm-12 col-md-6">
            <h5 className="text-center">Entre em contato conosco</h5>
        </div>
       
        </>
    );
}

export default Home;