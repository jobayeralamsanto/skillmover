import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import Ourskill from "./components/Ourskill"
import Mentor from "./components/Mentor"
import Upcomecourse from "./components/Upcomecourse"
import Larningfeature from "./components/Larningfeature"
import Growingfast from "./components/Growingfast"
import Explore from "./components/Explore" 
import Subscribe from "./components/Subscribe" 
import Footer from "./components/Footer" 




function App() {

  return (
    <div>
    <div>
    
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />

        <Switch>
          <Route path="/" exact component={Products} />

          <Route path="/cart" exact component={Cart} />
        </Switch>

      </Router>

      </CartContextProvider>
      </ProductContextProvider> 
           <Mentor />
           <Upcomecourse/>
           <Ourskill/> 
           <Larningfeature/>
           <Growingfast/>
           <Explore/>
           <Subscribe/>
           <Footer/>
           
    </div>
      

    </div>
  );
}

export default App;
