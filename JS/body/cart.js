const shoppingCartContainer = document.createElement('div');
shoppingCartContainer.classList.add('shopping-cart-container');
document.querySelector('#main').appendChild(shoppingCartContainer);



function genCartListElement(row, length) {
    const cpWrapper = document.createElement('div');
    cpWrapper.classList.add('cp-wrapper');

    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');

    const logoImg = document.createElement('img');
    logoImg.src = 'img/' + row.associated_image;
    logoImg.alt = '';
    imgContainerDiv.appendChild(logoImg);

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productTitle = document.createElement('span');
    productTitle.textContent = row.product_name;

    const productDescription = document.createElement('p');
    productDescription.textContent = row.description.it;

    const price = document.createElement('div');
    price.classList.add('price');

    const priceValue = document.createElement('p');
    priceValue.textContent = row.price;

    const quantity = document.createElement('div');
    quantity.classList.add('quantity');


    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = 'quantity';
    quantityInput.setAttribute('min', '1');
    quantityInput.setAttribute('step', '1');

    const quantityValue = () => {
        const cart = JSON.parse(localStorage.getItem('cartList'));
        for (let j = 0; j < cart.length; j++) {
            if (Number(cart[j].id) == Number(row.product_id)) {
                return Number(cart[j].count);
            }
        }
        shoppingCartContainer.textContent = '';
        return 0;
    }
    quantityInput.setAttribute('value', quantityValue());

    const btns = document.createElement('div');
    btns.classList.add('btns');

    const heartBtn = document.createElement('i');
    heartBtn.classList.add('fa', 'fa-heart');

    const trashBtn = document.createElement('i');
    trashBtn.classList.add('fa', 'fa-trash');
    trashBtn.setAttribute('onClick', 'removeToCart(' + length + ')');

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productDescription);

    price.appendChild(priceValue);

    quantity.appendChild(quantityInput);

    btns.appendChild(heartBtn);
    btns.appendChild(trashBtn);

    cpWrapper.appendChild(imgContainerDiv);
    cpWrapper.appendChild(productDetails);
    cpWrapper.appendChild(price);
    cpWrapper.appendChild(quantity);
    cpWrapper.appendChild(btns);
    shoppingCartContainer.appendChild(cpWrapper);
    // check-out
}
const checkOutLabel = () => {
    const checkOut = document.createElement('div');
    checkOut.classList.add('check-out');

    const text = document.createElement('div');
    text.classList.add('text');

    const p = document.createElement('p');
    p.textContent = 'Totale';

    const span = document.createElement('span');
    const eurosTotal = () => {

        const cart = JSON.parse(localStorage.getItem('cartList'));
        return getJSON()
            .then(response => response.json())
            .then(data => {
                let sum = 0;
                for (var i = 0; i < data.length; i++) {
                    for (let j = 0; j < cart.length; j++) {
                        if (Number(cart[j].id) == Number(data[i].product_id)) {
                            sum += data[i].price * cart[j].count;
                        }
                    }
                }
                //while() {
                span.textContent = sum;
                //}

            })
            .catch(error => console.error(error));

    }
    span.textContent = eurosTotal();
    text.appendChild(p);
    text.appendChild(span);
    checkOut.appendChild(text);

    const buy = document.createElement('div');
    buy.classList.add('buy-div');

    const i = document.createElement('i');
    i.classList.add('fa', 'fa-trash');

    i.setAttribute('onclick', 'clearCart()');
    const a = document.createElement('a');
    a.classList.add('buy');
    a.textContent = 'Paga';
    a.setAttribute('href', 'mailto:lawrence.canton@gmail.com');

    buy.appendChild(i);
    buy.appendChild(a);
    checkOut.appendChild(buy);
    shoppingCartContainer.appendChild(checkOut);
    //shoppingCartContainer.replaceChildren(checkOut, checkOut.parentNode());
}

checkOutLabel();
const clearCart = () => {
    localStorage.clear();
    location.reload();
}










