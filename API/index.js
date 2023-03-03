const express = require('express');
const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');

const app = express();

const file = 'prodotti.json';

var port = 3000;

app.use(express.json());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    next();
});



app.get('/api/read', (req, res) => {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            res.send(err);
        }
        res.send(data)
    });
});
/*
app.post("/api/write", (req, res) => {
    console.log(req.body);
    fs.writeFile(file, JSON.stringify(req.body),
        {
            encoding: 'utf8',
            flag: 'w',
            mode: 0o666
        },
        (err) => {
            if (err)
                res.send(err);
            else {
                res.send('ok');
            }
        });
});


app.post("/api/write", (req, res) => {
    //console.log(req.body);
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
    fs.writeFile(file, JSON.stringify(req.body),
        {
            encoding: 'utf8',
            flag: 'w',
            mode: 0o666
        },
        (err) => {
            if (err)
                res.send(err);
            else {
                fs.readFile(file, 'utf8', function (err, data) {
                    if (err) {
                        res.send(err);
                    }
                    res.then(response => response.json())
                        .then(data => {
                           //data.pus
                        })
                        .catch(error => console.error(error));
                });
                res.send('ok');
            }
        });
});

app.post("/api/append", (req, res) => {

    console.log(req.body);
    fs.writeFile(file, JSON.stringify(req.body),
        {
            encoding: 'utf8',
            flag: 'w',
            mode: 0o666
        },
        (err) => {
            if (err)
                res.send(err);
            else {
                res.send('ok');
            }
        });
});


app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return (err);
        }
        var json = JSON.parse(data);
        const newJson = req.body;


        json[Number(id)].product_name = newJson.product_name;
        json[Number(id)].price = newJson.price;
        json[Number(id)].visibility = newJson.visibility;
        json[Number(id)].category = newJson.category;
        json[Number(id)].associated_image = newJson.associated_image;

        fs.writeFileSync(file, JSON.stringify(json));
        res.send('ok');
    });
});


*/
app.listen(port, () => { console.log('listening on port ' + port); });

