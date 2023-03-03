const url = 'http://127.0.0.1:3000/';
//const url = 'http://82.223.12.250:3000/';
const getJSON = () => {
    return fetch(url + 'api/read', {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json'
        }
    })
}

