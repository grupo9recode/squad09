

function Autenticacao() {
    if (localStorage.getItem('key') === "true") {
        return true
    }
    else {
         return false
    }
};

export default Autenticacao;