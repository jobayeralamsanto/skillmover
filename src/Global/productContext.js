import React, {createContext, useReducer} from "react"

import {ProductReducer} from "./productReducer"
import iphone from "../assets/web design.png";
import headphones from "../assets/illustrator.jpg"
import microphone from "../assets/logo-design-1.jpg"
import rings from "../assets/photo edit.jpg"
import shoes from "../assets/Photoshop-Tools.jpg"
import watch from "../assets/upwork.png"
import perfum from "../assets/social.png"
import dslr from "../assets/digital.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {
   
   

    const [products] = useReducer(ProductReducer, [
      
        {id: 1, name: 'Development', price: 0, image: dslr, },
        {id: 2, name: 'Design', price: 450, image: perfum,},
        {id: 3, name: 'Development', price: 450, image: watch,},
        {id: 4, name: 'Marketing', price: 450, image: shoes,},
        {id: 5, name: 'Bussines', price: 450, image: microphone,},
        {id: 6, name: 'Logo Design', price: 450, image: headphones,},
        {id: 7, name: 'Social media', price: 450, image: iphone,},
     
      ])

    return(
         
        <productContext.Provider value={{products}}>
         
           {props.children}
          
        </productContext.Provider>
      
      
        
    )

}

export default ProductContextProvider;