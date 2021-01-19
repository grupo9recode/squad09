import Menu from "../Componentes/Menu/Menu";
import './Css/Home.css';
import Rodape from '../Componentes/Rodape/Rodape'
function Home() {
    return (
        <>
            <Menu />
            <div className="corpo">



                <div className="container ">


                    <div className=' mt-5' id='sobreProjeto'>
                        <a ><img src={require('../Imagens/unidas.png').default} class="img-fluid" alt="Imagem responsiva" width="100%" /></a>
                        <div className='container container-fluid  justify-content-center align-items-center pt-5'>
                            <h4>Sobre o projeto</h4>
                            <p>Amet fugiat et commodo enim pariatur id est dolore occaecat. Proident veniam id sint quis. Est ullamco Lorem et reprehenderit cillum laboris aute pariatur nostrud velit aute.</p>
                            <p>Quis ipsum excepteur duis anim exercitation. Et qui exercitation ullamco eu ad aute sit in do qui anim ipsum velit. Esse incididunt cupidatat deserunt adipisicing nulla aliqua aute. Velit do cillum ullamco ex magna magna labore. Officia ut exercitation magna magna ea incididunt exercitation nisi mollit consectetur reprehenderit elit Lorem.

                            Lorem irure eu magna ullamco exercitation aute ipsum ad id cillum. Sint deserunt elit nisi occaecat adipisicing laborum ad in. Proident labore eu Lorem qui.</p>
                        </div>
                    </div><hr className='divisoria'/>
                    <div className='mt-5' id='comoFunciona'>
                        <div className='container container-fluid  justify-content-center align-items-center pt-5'>
                            <h4>Como funciona</h4>
                            <p>Amet fugiat et commodo enim pariatur id est dolore occaecat. Proident veniam id sint quis. Est ullamco Lorem et reprehenderit cillum laboris aute pariatur nostrud velit aute.</p>
                            <p>Laborum mollit elit sunt quis nisi excepteur nulla eu ut voluptate laborum ex dolore laboris. Veniam laboris ullamco nostrud ipsum consectetur eu ullamco minim. Aute et veniam irure anim consectetur eiusmod ea do laborum id.

                            Consectetur veniam occaecat eiusmod quis. Nulla sit consequat occaecat irure. Voluptate ex labore minim esse officia fugiat occaecat dolor eu mollit.</p>
                        </div>
                        <a ><img src={require('../Imagens/favela.png').default} class="img-fluid" alt="Imagem responsiva" width="100%" /></a>
                    </div>
                    <hr className='divisoria'/>
                    <div className=' mt-5' id='paraQuem'>
                        <a ><img src={require('../Imagens/maos.png').default} class="img-fluid" alt="Imagem responsiva" width="100%" /></a>
                        <div className='container container-fluid  justify-content-center align-items-center pt-5'>
                            <h4>Para quem é</h4>
                            <p>Amet fugiat et commodo enim pariatur id est dolore occaecat. Proident veniam id sint quis. Est ullamco Lorem et reprehenderit cillum laboris aute pariatur nostrud velit aute.</p>
                            <p>Lorem elit ad Lorem elit labore fugiat aliquip eu non do. Ea fugiat incididunt nulla in sunt pariatur. Aliqua commodo consectetur ut ex est labore sint exercitation cillum velit excepteur. Et pariatur non eiusmod tempor irure ex dolore anim veniam non amet ad eiusmod incididunt. Consectetur reprehenderit ea laborum dolore. Esse qui sunt consectetur non et sit duis laboris sunt non voluptate nulla. Deserunt esse aute velit deserunt tempor nulla cillum aute laboris cupidatat ad non sit.

                            Nostrud culpa eu adipisicing in adipisicing cillum Lorem. Id do reprehenderit cillum duis cillum Lorem mollit ex cillum voluptate cupidatat. Qui velit incididunt cupidatat dolor et eu in et ad sint sint. Consectetur voluptate proident veniam irure deserunt aliquip ullamco aliquip non. Do aute officia do nulla commodo velit. Amet laboris reprehenderit voluptate ea. Excepteur dolore do ullamco culpa commodo non voluptate ut.

                            Id amet culpa consectetur amet aliquip eu. Laborum sit ea excepteur eu nisi reprehenderit sint irure tempor id. Laboris minim sunt aliqua aliqua cillum aliqua nostrud qui duis.</p>
                        </div>

                    </div>
                </div>
            </div>


            <Rodape />
        </>
    );
}

export default Home;