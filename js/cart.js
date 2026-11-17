const cart = [];


function addToCart(item) {
    cart.push(item);
    //show toast
    alert(`${item} has been added to the cart.`);
    console.log(`${item} has been added to the cart.`)

}

function removeFromcart(item){
    const index = cart.indexOf(item);
    if (index> -1) {
        cart.splice(index, 1);
        alert(`${item} has been remove from the cart`);
    }
     else {
        console.log(`${item} is not in the cart.`);
     }

}

function viewCart() {
    if (cart.length ===0) {
        console.log( "Your cart is empty.")
        alert("Your cart is empty.");
    } else {
        console.log("Items in your cart:")
        cart.forEach((item, index)=>{
            console.log(`${index + 1}. ${item}`);
        });
    }

}

function loadCartItems() {
    const cartItemsConstainer = document. getElemenetById('cart-items');
    cartItemsConstainer.innerHTML ='';

    if (cart.length===0) {
        cartItemsConstainer.innerHTML='<p>Your cart is empty.</p>';
    } else {
        cart,forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${item} </span>
                <button onclick="removeFromCart('${item}')">Remove</button>`;
            
            cartItemsConstainer.appendChild(itemElement);    
        });
    }
    updatTotalPrice();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = cart.length *799.99; //Assuming each item cost $799.9
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

}