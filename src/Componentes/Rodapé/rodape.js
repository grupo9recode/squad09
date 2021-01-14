import React from 'react';

import icones from '../imagens/icones.png';

function ComponentFooter() {
    return (
        <div className="container">
            <footer id="rodape">
                <h4 className="text-dark font-weight-bold">NOS ACOMPANHE NAS REDES SOCIAIS!</h4>
                <img width="400px" src={icones} alt="icones" />
                <p>&copy; Recode Pro</p>
            </footer>
        </div>
    )
}


export default ComponentFooter;