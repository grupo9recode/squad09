
const Sair = () => {
    localStorage.removeItem('key');
    window.location.reload();
};

export default Sair;