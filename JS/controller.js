window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        //header.style.background = 'black';
    } else {
        //header.style.background = 'linear-gradient(0deg, var(--primary-color-A) 0%, #000000e0 100%)';
    }
});

function removeToCart(value) {
    const cart = JSON.parse(localStorage.getItem('cartList'));
    if (cart[value].count > 1) cart[value].count--;
    else cart.splice(value, 1);
    localStorage.setItem("cartList", JSON.stringify(cart));
    location.reload();
}

function addToCart(value) {
    if (!localStorage.getItem("cartList")) {
        localStorage.setItem("cartList", JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem('cartList'));
    let temp = false;
    for(let i = 0; i < cart.length; i++) {
        if (cart[i].id == value) {
            cart[i].count++;
            temp = true;
        }
    }
    if(!temp)cart.push({id: value, count: 1});
    localStorage.setItem("cartList", JSON.stringify(cart));
    shoppigCartBedge();
}


const genCartList = ()  => {
    const cart = JSON.parse(localStorage.getItem('cartList'));
    if (cart) {
        getJSON()
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < cart.length; j++) {
                    if (Number(cart[j].id) == Number(data[i].product_id)) {
                        genCartListElement(data[i], j);
                    }
                }
            }
        })
        .catch(error => console.error(error));

    // condizioni per il carrello vuoto
    } else {
        const p = document.createElement('div');
        p.textContent = "Il cartello è vuoto";
        shoppingCartContainer.appendChild(p);
        shoppingCartContainer.setAttribute('id', 'empty-cart');
    }

    if(cart.length <= 0) {
        const p = document.createElement('div');
        p.textContent = "Il cartello è vuoto";
        shoppingCartContainer.appendChild(p);
        shoppingCartContainer.setAttribute('id', 'empty-cart');
    } 
}

/*********** index product ***********/

const genProducts = () => {
    getJSON()
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                genProduct(data[i]);
            }
        })
        .catch(error => console.error(error));
}




