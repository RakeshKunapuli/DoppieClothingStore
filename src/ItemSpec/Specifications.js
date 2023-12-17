import React, { useEffect, useState } from "react";
import Styles from "./Specifications.module.css";
import {useParams } from "react-router-dom";
import Data from "../Data.json";

function Specifications() {

  let {id} = useParams();

  let [product, setproduct] = useState();
  let [selectedimage, setselectedimage] = useState(0);

//  console.log(product)

  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const handleAddtoCart = () => {
    var cartObj = {
      title: product[0].title,
      id: product[0].id,
      thumbnail: product[0].thumbnail,
      price: product[0].price,
      brand: product[0].brand,
    };
    cartItems.push(cartObj);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item Added to Cart");
  };


  let fetchData = () => {
    let findProduct = Data.find((item) => item.id == id);
    setproduct([findProduct]);
    
  };

  const changemainimg = (id) => {
    setselectedimage(id);
  };

  useEffect(() => {
    fetchData();
   
  }, [id]);

  return (
    <>
      <div className={Styles.mianSpecContainer}>
      {product &&
          product.map((item,i) => {
            return (
                <div className={Styles.productWrapper} key={i}>
                  <div className={Styles.imagecontainer}>
                    <img
                      src={item.images && item.images[selectedimage]}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className={Styles.details}>
                    <h4>Title:</h4>
                    <p>{item.title}</p>
                    <h4>Brand:</h4>
                    <p>{item.brand}</p>
                    <h4>Description:</h4>
                    <p>{item.description}</p>
                    <h4>Price:</h4>
                    <p>
                      <b style={{color: "rgb(12, 233, 12)"
                  }}>
                        Rs {item.price}
                      </b>{" "}
                    </p>
                    <div className={Styles.images}>
                      {item.images.map((images, i) =>{
                        return (
                          <div
                            key={i}
                            onClick={() =>changemainimg(i)}
                            className={Styles.additionalImages}
                          >
                            <img src={images} alt='Additional images' loading="lazy" />
                          </div>
                        );
                      })}
                    </div>
                    <div className={Styles.cartbtn}>
                      <button onClick={handleAddtoCart}>Add To Cart</button>
                    </div>
                  </div>
                </div>
            );
          })}
          </div>
    </>
  )
}
export default Specifications;

