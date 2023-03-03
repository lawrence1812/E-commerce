const productContainer = document.createElement('div');
productContainer.className = 'product-container';
document.querySelector('.main').appendChild(productContainer);


const genProduct = (row)  => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('product-wrapper');

    const boxUpDiv = document.createElement('div');
    boxUpDiv.classList.add('box-up');
    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', 'img/' + row.associated_image);
    img.setAttribute('alt', '');
    const imgInfoDiv = document.createElement('div');
    imgInfoDiv.classList.add('img-info');

    const infoInnerDiv = document.createElement('div');
    infoInnerDiv.classList.add('info-inner');

    const pNameSpan = document.createElement('span');
    pNameSpan.classList.add('p-name');
    pNameSpan.textContent = row.product_name;

    const pCompanySpan = document.createElement('span');
    pCompanySpan.classList.add('p-category');
    pCompanySpan.textContent = row.category;

    // Assemble the inner divs
    infoInnerDiv.appendChild(pNameSpan);
    infoInnerDiv.appendChild(pCompanySpan);
    imgInfoDiv.appendChild(infoInnerDiv);
    boxUpDiv.appendChild(img);
    boxUpDiv.appendChild(imgInfoDiv);

    // Create the second inner div
    const boxDownDiv = document.createElement('div');
    boxDownDiv.classList.add('box-down');

    const hBgDiv = document.createElement('div');
    hBgDiv.classList.add('h-bg');

    const hBgInnerDiv = document.createElement('div');
    hBgInnerDiv.classList.add('h-bg-inner');
    hBgDiv.appendChild(hBgInnerDiv);

    const cart = document.createElement('div');
    cart.classList.add('cart');

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSpan.textContent = row.price;

    const addToCartSpan = document.createElement('a');
    addToCartSpan.classList.add('add-to-cart');
    addToCartSpan.setAttribute('onClick', 'addToCart(' + row.product_id + ')');

    const txtSpan = document.createElement('span');
    txtSpan.classList.add('txt');
    txtSpan.textContent = 'Aggiungi al carrello';

    const iFavorite = document.createElement('i');
    iFavorite.className = 'fa fa-heart';
    iFavorite.setAttribute('onClick', 'prova()');
    addToCartSpan.appendChild(txtSpan);
    cart.appendChild(priceSpan);
    cart.appendChild(addToCartSpan);
    cart.appendChild(iFavorite);
    boxDownDiv.appendChild(hBgDiv);
    boxDownDiv.appendChild(cart);

    // Assemble the wrapper div
    wrapperDiv.appendChild(boxUpDiv);
    wrapperDiv.appendChild(boxDownDiv);

    // Add the wrapper div to the document body
    productContainer.appendChild(wrapperDiv);
}




