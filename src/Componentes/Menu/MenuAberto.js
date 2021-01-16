import { FaStoreAlt} from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

const MenuAberto = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark menu-container">
            <a href='/'><img src={require('../../Imagens/mao.png').default} alt="" width="50" /></a>
                <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon m-auto"></span>
                </button>
                <div className="collapse navbar-collapse menu-links" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item active">
                            <a className="nav-link text-light font-weight-bold" href="/produtos" to='/produtos'><FaStoreAlt className="icons"/><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light font-weight-bold" href="/servicos" to='/servicos'><BsPeople className="icons" /><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light font-weight-bold" href="/contato" to='/contato'><MdContactMail className="icons" /><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light font-weight-bold" href="/login" to='/login'><button type="button" class="btn btn-light btn-sm m-2 font-weight-bold botaoMenu">ENTRAR</button><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light font-weight-bold" href="/cadastrese" to='cadastrese'><button type="button" class="btn btn-light btn-sm m-2 font-weight-bold">CADASTRE-SE</button><span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default MenuAberto;