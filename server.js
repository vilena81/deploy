const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const data = [ 
    {
        "title": "Ferocious",
        "description": "super ferocious",
        "price": 30
    },
    {
        "title": "Fabolous",
        "description": "super fabulous",
        "price": 50
    },
    {
        "title": "Extraordinary",
        "description": "super extraordinary",
        "price": 150
    }
]
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/products', (req, res) => {
    res.json(data);
  });

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});