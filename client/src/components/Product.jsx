import React from 'react';

const Product = (props) => {
    return (
        <li className="product">
            <img src={`${process.env.PUBLIC_URL}/images/${props.data.picture}`} alt={props.data.title} />
            <div className="capture">
                <h3>{props.data.title}</h3>
                <div>{props.data.price}</div>
                <div>{props.data.description}</div>
            </div>
        </li>
    );
};

export default Product;