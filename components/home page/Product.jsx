"use client";

import React from "react";
import Product1 from "../../public/images/image-product-1.jpg";
import Image from "next/image";
import Previous from "../../public/images/icon-previous.svg";
import Next from "../../public/images/icon-next.svg";
import Plus from "../../public/images/icon-plus.svg";
import Minus from "../../public/images/icon-minus.svg";
import Cart from "../../public/images/icon-cart.svg";
import "../../styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";

const Product = () => {
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const dispatch = useDispatch();
  const { selectedProductId, selectedQuantity, products } = useSelector(
    (state) => state.product
  );

  const product =
    products.find((p) => p.id === selectedProductId) || products[0];

  if (!product) {
    return <div>No product found</div>;
  }
  //just declare the function here
  const getDiscount = (price, discount) => {
    return price * (1 - discount / 100);
  };
  console.log(getDiscount(product.price, product.discount));
  useEffect(() => {
    // const discountVal = getDiscount(product.price, product.discount);
    // setDiscountedPrice(discountVal)

    //the code above will work fine too
    setDiscountedPrice(getDiscount());
    //the produc object deh inside the dependency array, meaning that the value will update anytime the you change the product obejct
  }, [product]);
  return (
    <div className="product">
      <div className="product-image">
        <Image src={Product1} alt="product1" className="product1" />
        <div className="control previous">
          <Image src={Previous} alt="previous" className="previous" />
        </div>
        <div className="control next">
          <Image src={Next} alt="next" className="next" />
        </div>
      </div>

      <div className="wrapper">
        <div className="product-details">
          <h3>sneaker company</h3>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
        </div>

        <div className="product-price">
          <h2>${discountedPrice}</h2>
          <div className="price-percentage">
            <h1>{product.discount}%</h1>
          </div>
          <h3>${product.price.toFixed(2)}</h3>
        </div>

        <div className="product-amount">
          <Image src={Minus} alt="minus" />
          <span>0</span>
          <Image src={Plus} alt="plus" />
        </div>

        <button className="btn">
          <Image className="cart-add" src={Cart} alt="cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
