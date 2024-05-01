let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} added to cart!`);
  displayCart(); 
}

function displayCart() {
  const cartList = document.querySelector('.cart ul');
  cartList.innerHTML = '';
  let totalAmount = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(listItem);
    totalAmount += item.price; 
  });

  document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`; // Update total price in UI
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add items to the cart before proceeding to checkout.');
  } else {
   
    alert('Redirecting to the checkout page...');
   
  }
}
displayCart();
