// Inicializar variáveis
let cart = [];
let total = 0;

// Função para adicionar produto ao carrinho
function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

// Atualizar carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });

    // Atualizar o total (valor fictício por produto)
    total = cart.length * 100;
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Event listeners para adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        addToCart(productName);
    });
});
