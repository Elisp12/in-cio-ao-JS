const btnCompra = document.querySelector("#comprar");
const dadoUsuario = document.getElementById('compra');
const quantidade = document.getElementById('quant');

const quant = quantidade.innerText;
console.log('Quantidade total: ', quant);

function ler () {
    const dadoUser = dadoUsuario.value;
    console.log('Quantidade do Usário', dadoUser);
    
}

btnCompra.addEventListener('click', ler);