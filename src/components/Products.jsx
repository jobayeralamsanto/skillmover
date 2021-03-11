import React, {useContext} from "react"
import { productContext } from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import Banner from "./Banner"
import Headerbottom from "./Headerbottom"

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Products = () => {
   
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
     
   const {products} = useContext(productContext);
   const {dispatch} = useContext(cartContext);
    return(
        <>
        <Banner />
         <Headerbottom/> 
           
         <div classname="rap">
         <Carousel {...settings}>
        <div className="products" style={{marginTop: '30px'}}>
        {products.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   ${product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div>
             
            </div>

            </div>

        ))}

        
        </div>
          </Carousel>
        </div>
       
        
        </>

    )

}

export default Products;