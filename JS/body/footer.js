const genFooter = () => {


    const footer = document.createElement('footer');
    footer.classList.add('site-footer');

    const container = document.createElement('div');
    container.classList.add('container');
    footer.appendChild(container);

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    // Crea il primo div del footer
    const col1 = document.createElement('div');
    col1.classList.add('col-sm-12', 'col-md-6');
    row.appendChild(col1);

    const h6 = document.createElement('h6');
    h6.textContent = 'about us';
    col1.appendChild(h6);

    const p = document.createElement('a');
    p.classList.add('text-justify');
    p.textContent = 'Chi siamo?';
    p.setAttribute('href', 'about.html');
    col1.appendChild(p);

    // Crea il secondo div del footer
    const col2 = document.createElement('div');
    col2.classList.add('col-xs-6', 'col-md-3');
    row.appendChild(col2);

    const h62 = document.createElement('h6');
    h62.textContent = 'categorie';
    col2.appendChild(h62);

    const ul = document.createElement('ul');
    ul.classList.add('footer-links');
    col2.appendChild(ul);

    const categories = ['Sport', 'Abbigliamento', 'Elettronica', 'Collezionismo'];
    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.textContent = category;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Crea il terzo div del footer
    const col3 = document.createElement('div');
    col3.classList.add('col-xs-6', 'col-md-3');
    row.appendChild(col3);

    const h63 = document.createElement('h6');
    h63.textContent = 'dove siamo';
    col3.appendChild(h63);

    const ul2 = document.createElement('ul');
    ul2.classList.add('footer-links');
    col3.appendChild(ul2);

    const links = ['Via Raffaello Sanzio 2 Rho', 'Rho Corso Europa', 'Pero Milano'];
    links.forEach(link => {
        const li2 = document.createElement('li');
        const a2 = document.createElement('a');
        a2.setAttribute('href', '#');
        a2.textContent = link;
        li2.appendChild(a2);
        ul2.appendChild(li2);
    });

    const hr_line = document.createElement('hr');
    container.appendChild(hr_line);
    // Crea il div per il copyright
    const copyrightDiv = document.createElement('div');
    copyrightDiv.classList.add('col-md-8', 'col-sm-6', 'col-xs-12');
    container.appendChild(copyrightDiv);

    const copyrightText = document.createElement('p');
    copyrightText.classList.add('copyright-text');
    copyrightText.textContent = 'Copyright \u00A9 2023 All Rights Reserved by';
    copyrightDiv.appendChild(copyrightText);

    const a3 = document.createElement('a');
    a3.setAttribute('href', '#');
    a3.textContent = ' Il Piccolo Canton';
    copyrightText.appendChild(a3);

    // Crea il div per i pulsanti social
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('col-md-4', 'col-sm-6', 'col-xs-12');
    container.appendChild(socialDiv);

    const ul3 = document.createElement('ul');
    ul3.classList.add('social-icons');
    socialDiv.appendChild(ul3);

    const socialLinks = ['facebook', 'twitter', 'github', 'instagram'];
    socialLinks.forEach(socialLink => {
        const li3 = document.createElement('li');
        const a4 = document.createElement('a');
        a4.classList.add(socialLink);
        switch (socialLink) {
            case 'facebook':
                a4.setAttribute('href', 'https://facebook.com/');
                break;
            case 'twitter':
                a4.setAttribute('href', 'https://twitter.com/cobratate'); 
                break;
            case 'github':
                a4.setAttribute('href', 'https://github.com/lawrence1812'); 
                break;
            case 'instagram':
                a4.setAttribute('href', 'https://www.instagram.com/simo_piccolo04');
                break;
            }
        const i = document.createElement('i');
        i.classList.add('fa', `fa-${socialLink}`);
        a4.appendChild(i);
        li3.appendChild(a4);
        ul3.appendChild(li3);
    });
    const body = document.querySelector('body');
    body.appendChild(footer);

}