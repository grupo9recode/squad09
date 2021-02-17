import Sair from '../../Sair'
import { FiHome } from "react-icons/fi";
import { FaStoreAlt} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { ImExit, ImCog } from "react-icons/im";
import { BsPeople } from "react-icons/bs";


const MenuFechado = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark menu-container" id='menu'>
            <a href='/'><img src={require('../../Imagens/dandara.png').default} alt="Dandara" width="190" /></a>
            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon m-auto"></span>
            </button>
            <div className="collapse navbar-collapse menu-links" id="navbarNav">
                <ul className="navbar-nav">
                   
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="/produtos" to='/produtos'><FaStoreAlt className="icons"/>PRODUTOS<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="/servicos" to='/servicos'><BsPeople className="icons" />SERVIÇOS<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link text-light" href="/minhaconta" to='/minhaconta'><ImCog className="icons" />MINHA CONTA<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="/contato" to='/contato'><MdContactMail className="icons" />CONTATO<span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item active">
                        <a className="nav-link text-light" href='#' onClick={Sair}><ImExit className="icons"/>SAIR<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}
export default MenuFechado