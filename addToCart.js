let cart = [];
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartItemCount = document.getElementById("cartItemCount");
let quantityItem =  document.getElementById("Quantity");



//step 1 - when user clicks on addCart with the arguments
//step -2 - item is initalized

function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
        quantity: 1
    }                                                                     
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity+1;
    } else {
        cart.push(item);
    }
    console.log(existingItem);
    updateCart();
}

function updateCart() {
    
    cartItems.innerHTML = "";
    let total = 0;
    let countOfItems = 0;
    
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td><button class="btn btn-primary" onclick="removeItem('${item.name}')">Remove</button></td>
             <td>Rs ${item.price.toFixed(2)}</td>
        `;
        cartItems.appendChild(row);
        total += item.price * item.quantity;
        countOfItems += item.quantity;
    });

    Quantity.textContent = countOfItems;
    cartTotal.textContent = "Rs. " + total.toFixed(2);
    cartItemCount.textContent =countOfItems;
}

//removing items from cart
function removeItem(productName) {
    for(let item of cart){
        if(item.name === productName){
            let itemIndex = cart.indexOf(item);
            let itemInTheCart = cart[itemIndex];
            if(itemInTheCart === item){
                cart.splice(item, 1);
                console.log("removed");
            }
        }
    }
    //update cart 
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

