import './Menu.css';

function Menu() {
    return (
       <>
            <nav class="navbar navbar-expand-lg navbar-dark menu-container">
                <img src={require('../../Imagens/logo.png').default} alt="" width="50" />
                <button class="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon m-auto"></span>
                </button>
                <div class="collapse navbar-collapse menu-links" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/" to='/'>Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/produtos" to='/produtos'>Produtos<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/servicos" to='/servicos'>Serviços<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/contato" to='/contato'>Contato <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/login" to='/login'>Login<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/cadastrese" to='cadastrese'>Cadastre-se<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Menu;