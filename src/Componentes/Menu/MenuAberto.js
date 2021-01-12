
const MenuAberto = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark menu-container">
            <a href='/'><img src={require('../../Imagens/logo.png').default} alt="" width="50" /></a>
                <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon m-auto"></span>
                </button>
                <div className="collapse navbar-collapse menu-links" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/" to='/'>Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/produtos" to='/produtos'>Produtos<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/servicos" to='/servicos'>Serviços<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/contato" to='/contato'>Contato <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/login" to='/login'>Login<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/cadastrese" to='cadastrese'>Cadastre-se<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default MenuAberto;