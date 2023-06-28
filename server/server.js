const express = require("express");
const app = express();
const port = 5000;

let currentLocale;

app.get("/api/localization", (req, res) => {
    res.json({
        "Products": "Products",
        "About": "About",
        "Contacts": "Contacts"
    });
});

app.get("/api/products", (req, res) => {
    res.json({
        products: []
    })
});

app.listen(5000, () => {
    console.log(`Server running http://localhost:${5000}`);
})