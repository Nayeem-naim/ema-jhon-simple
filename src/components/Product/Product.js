import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
console.log(props)

const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div >
                <img src={img} alt=""/>
            </div>
            <div >
            <h4 className="product-name">{name}</h4>
            <p><small>By:{seller}</small></p><br/>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - Order now</small></p>
            <button  onClick={()=> props.handleAddProduct(props.product)}
             className="main-btn"> 
                <FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;