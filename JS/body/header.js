/*
    crea un bedge sull'icone del carrello con il numero degli elementi al suo interno
*/
const shoppigCartBedge = () =>  { 
    const badgeDOM = document.getElementById('shoppigCartBedge');
        
    if (!localStorage.getItem('cartList')) {
        badgeDOM.innerHTML = 0;
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cartList'));
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
        count += cart[i].count;
    }
    badgeDOM.innerHTML = count;     
}
/*
    questo metodo genera il codice HTML per la creazione del header in index.html
*/
const genHeader = () => {
    const header = document.createElement('header');
    header.className = "site-header";

    const div_logo = document.createElement('div');
    div_logo.className = "site-identity";
    header.appendChild(div_logo);

    const imgLiA = document.createElement('a');
    imgLiA.href = 'index.html';
    const img_logo = document.createElement('img');
    img_logo.src = 'img/logo.jpg';
    div_logo.appendChild(imgLiA);
    imgLiA.appendChild(img_logo);

    const search_bar = document.createElement('div');
    search_bar.className = 'search-box';
    header.appendChild(search_bar);

    const header_nav = document.createElement('nav');
    header_nav.className = "site-navigation";
    header.appendChild(header_nav);

    const header_ul = document.createElement('ul');
    header_nav.appendChild(header_ul);

    const header_li1 = document.createElement('li');
    const header_li2 = document.createElement('li');
    const header_li3 = document.createElement('li');
    header_ul.appendChild(header_li1);
    header_ul.appendChild(header_li2);
    header_ul.appendChild(header_li3);

    const a_li1 = document.createElement('a');
    a_li1.href = '#';
    header_li1.appendChild(a_li1);
    const heartA = document.createElement('i');
    heartA.className = 'fa fa-heart';
    a_li1.appendChild(heartA);

    const a_li2 = document.createElement('a');
    a_li2.href = 'cart.html';
    header_li2.appendChild(a_li2);
    const cart = document.createElement('i');
    cart.className = 'fa fa-shopping-cart';
    a_li2.appendChild(cart);

    const cartBedgeSpan = document.createElement('span');
    cartBedgeSpan.className = 'bedge-icon';

    cartBedgeSpan.setAttribute('id','shoppigCartBedge');
    a_li2.appendChild(cartBedgeSpan);



    const a_li3 = document.createElement('a');
    a_li3.href = '#';
    header_li3.appendChild(a_li3);
    const user = document.createElement('i');
    user.className = 'fa fa-user';
    a_li3.appendChild(user);


    /********* search bar  *********/
    const search_bar_input = document.createElement('input');
    search_bar_input.type = 'text';
    search_bar_input.className = 'search-text';
    search_bar_input.placeholder = 'Cosa stai cercando?';
    search_bar.appendChild(search_bar_input);

    const search_btn = document.createElement('a');
    search_btn.onclick = 'alert("cerca")';
    search_btn.className = 'search-btn';
    search_bar.appendChild(search_btn);

    const search_icon = document.createElement('i');
    search_icon.className = 'fa fa-search';
    search_btn.appendChild(search_icon);

    /*
    <div class='search-box'>
            <input class="search-text" type="text" placeholder="Search Anything">
            <a href="#" class="search-btn">
                <i class="fas fa-search"></i>
            </a>
    
    </div>
    */

    document.body.appendChild(header);

    shoppigCartBedge();
}






