import React, {useState} from 'react';
import Product from "../components/Product";

const PageMain = () => {
    const [productsList, setProductsList] = useState([
        {id: 1, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 2, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
        {id: 3, title: "Product name", description: "Product description", price: "€15", picture: "product.jpg"},
    ]);

    //setProductsList([...productsList, newProductData])

    return (
        <>
            <h1>Products</h1>
            <ul className="products">
                {productsList.map(productData =>
                    <Product data={productData} key={productData.id} />
                )}

            </ul>
        </>
    );
};

export default PageMain;