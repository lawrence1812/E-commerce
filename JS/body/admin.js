const listFields = ["product_id", "product_name", "price", "description", "associated_image"];
const listTypeFields = ['number', 'text', 'number', 'text', 'file'];

const genTb = () => {

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    document.body.appendChild(mainContent);

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
                input.type = listTypeFields[i];
                td.appendChild(input);
                tr.appendChild(td);
            }

        }

    }
}
