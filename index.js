import express from 'express';
const app = express();

app.set("view engine", "ejs");

const products = [
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Phone", price: 2000 },
    { id: 3, name: "TV", price: 5000 }
];

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World', products });
});

app.get('/products', (req, res) => {
    res.render('products', { products });
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
});