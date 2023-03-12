

const listFields = [
    { name: 'product_name', type: 'text' },
    { name: 'price', type: 'number' },
    { name: 'description', type: 'text' },
    { name: 'associated_image', type: 'file' }
]

const genTb = () => {
    const main = document.createElement('main');
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    document.body.appendChild(main);
    main.appendChild(mainContent);

    const flTable = document.createElement('table');
    flTable.classList.add('fl-table');
    mainContent.appendChild(flTable);

    const thTable = document.createElement('thead');
    flTable.appendChild(thTable);

    const trFr = document.createElement('tr');
    thTable.appendChild(trFr);


    let td;

    td = document.createElement('td');
    td.textContent = 'Chiave';
    trFr.appendChild(td);

    td = document.createElement('td');
    td.textContent = 'Valore';
    trFr.appendChild(td);

    const tbTable = document.createElement('tbody');
    flTable.appendChild(tbTable);

    let tr;
    for (let i = 0; i < listFields.length; i++) {
        tr = document.createElement('tr');
        tbTable.appendChild(tr);
        for (let j = 0; j < 2; j++) {
            if (j == 0) {
                td = document.createElement('td');
                span = document.createElement('span');
                span.textContent = listFields[i].name;
                td.appendChild(span);
                tr.appendChild(td);
            }
            if (j == 1) {
                td = document.createElement('td');
                input = document.createElement('input');
                input.id = listFields[i].name;
                input.type = listFields[i].type;
                td.appendChild(input);
                tr.appendChild(td);
            }
        }
    }



    /* Create popup */
    const divContsainerPopup = document.createElement('div');
    divContsainerPopup.id = 'popup-container';
    main.appendChild(divContsainerPopup);


    const buttonPopup = document.createElement('button');
    buttonPopup.id = 'open-popup';
    buttonPopup.textContent = 'Invio'
    buttonPopup.onclick = () => {
        divContsainerPopup.style.display = 'block';

        const popup = document.createElement('div');
        popup.id = 'popup';
        divContsainerPopup.appendChild(popup);

        for (let i = 0; i < listFields.length; i++) {

            const input = document.getElementById(listFields[i].name).value || 'nessun inserimento';
            const boxContent = document.createElement('div');
            boxContent.className = 'box-content';
            popup.appendChild(boxContent);
            span = document.createElement('span');
            if (input ?? 0) span.textContent = listFields[i].name + ' : ' + input;
            boxContent.appendChild(span);

            const btContent = document.createElement('div');
            btContent.style.marginLeft = '2rem';
            boxContent.appendChild(btContent);

            const btClone = document.createElement('button');

            btClone.addEventListener('click', (event) => {
                const f = event.target.parentNode.parentNode;
                const clNode = f.cloneNode(true);
                document.querySelector('#popup').insertBefore(clNode, f.nextSibling);
            });
            const cloneIcon = document.createElement('i');
            cloneIcon.className = 'fa fa-clone';
            btContent.appendChild(btClone);
            btClone.appendChild(cloneIcon);

            const btRemove = document.createElement('button');
            btRemove.onclick = () => {

                document.querySelector('#popup').removeChild(boxContent);
            }
            const removeIcon = document.createElement('i');
            removeIcon.className = 'fa fa-trash';

            btContent.appendChild(btRemove);
            btRemove.appendChild(removeIcon);



        }

        const buttonClosePopup = document.createElement('button');
        buttonClosePopup.id = 'open-popup';
        buttonClosePopup.textContent = 'Chiudi'
        buttonClosePopup.onclick = () => {
            divContsainerPopup.style.display = 'none';
            divContsainerPopup.removeChild(popup);
        }
        popup.appendChild(buttonClosePopup);

        const buttonOKAY = document.createElement('button');
        buttonOKAY.addEventListener('click', () => {
            let xmlString = '<?xml version="1.0" encoding="UTF-8"?> <data>';

            for (let i = 0; i < listFields.length; i++) {
                const input = document.getElementById(listFields[i].name).value;
                const field = listFields[i].name;
                xmlString += ` <${field}> ${input} </${field}> `;
            }

            xmlString += '</data>';

            const blob = new Blob([xmlString], { type: 'application/xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'dati.xml';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

        });
        buttonOKAY.textContent = 'Conferma';
        popup.appendChild(buttonOKAY);
    }
    main.appendChild(buttonPopup);



}






