import React, {useContext, useState} from 'react';
import Product from "../components/Product";
import {LngContext} from "../context";
import "../styles/page_main.css";
import "../styles/page.css";

const PageMain = () => {
    const {translations} = useContext(LngContext);
    const [productsList, setProductsList] = useState([
        {id: 1, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 2, title: "Product name", description: "Product description", price: "€15", picture: "product2.jpg"},
        {id: 3, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 4, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 5, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 6, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 7, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 8, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 9, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 10, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
    ]);

    //setProductsList([...productsList, newProductData])

    return (
        <div id="pageMain" className="page">
            <h1>{translations.products}</h1>
            <ul className="products">
                {productsList.map(productData =>
                    <Product data={productData} key={productData.id} />
                )}

            </ul>
        </div>
    );
};

export default PageMain;