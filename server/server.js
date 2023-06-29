const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
let currentLocale;

app.use(cors({
    origin: "http://localhost:3000"
}));

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

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
})