const listFields = ["product_name", "price", "description", "associated_image"];
const listTypeFields = ['text', 'number', 'text', 'file'];

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


    const row = listFields.length;

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
    for (let i = 0; i < row; i++) {
        tr = document.createElement('tr');
        tbTable.appendChild(tr);
        for (let j = 0; j < 2; j++) {
            if (j == 0) {
                td = document.createElement('td');
                span = document.createElement('span');
                span.textContent = listFields[i];
                td.appendChild(span);
                tr.appendChild(td);
            }
            if (j == 1) {
                td = document.createElement('td');
                input = document.createElement('input');
                input.id = listFields[i];
                input.type = listTypeFields[i];
                td.appendChild(input);
                tr.appendChild(td);
            }

        }

    }
    const button = document.createElement('button');
    button.setAttribute('onClick', 'parserXML()');
    button.textContent = 'Invio';
    main.appendChild(button);

}

const parserXML = () => {
    let xmlString = '<?xml version="1.0" encoding="UTF-8"?> <data>';

    for (let i = 0; i < listFields.length; i++) {
        const input = document.getElementById(listFields[i]).value;
        const field = listFields[i];
        xmlString += ` <${field}> ${input} </${field}> `;

    }

    xmlString += '</data>';
    console.log(xmlString);


    const blob = new Blob([xmlString], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dati.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    /*
    const parser = new DOMParser();

    // Analizza la stringa XML e restituisce un documento DOM
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // Recupera i dati dal documento DOM
    const name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    const age = xmlDoc.getElementsByTagName("age")[0].childNodes[0].nodeValue;

    // Stampa i dati
    console.log("Name: " + name);
    console.log("Age: " + age);
    */
}
