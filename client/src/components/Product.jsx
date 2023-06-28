import React from 'react';

const Product = (props) => {
    return (
        <li className="product">
            <img src={`${process.env.PUBLIC_URL}/images/${props.data.picture}`} alt={props.data.title} />
            <div>{props.data.title}</div>
            <div>{props.data.price}</div>
            <div>{props.data.description}</div>
        </li>
    );
};

export default Product;