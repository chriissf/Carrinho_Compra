

let total;
limpar()

function adicionar(){

    //recuperar valores nome do produto, quantidade e valores
    let produto =document.getElementById('produto').value;

    //separar texto da variavel produto  com split
    let nomeProduto = produto.split ('-')[0];
    let valorUnitario = produto.split ('R$')[1];

    let quantidade =document.getElementById('quantidade').value;
    //calcular o preço,o subtotal
    let preco = quantidade * valorUnitario;

    let carrinho =document.getElementById('lista-produtos');

     //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
  </section>`;

    //atualizar o valor total

    total = total + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){

    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = '';

}

