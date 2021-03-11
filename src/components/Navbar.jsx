import React, {useContext} from "react";
import Button from '@material-ui/core/Button';
import {cartContext} from "../Global/cartContext";
import {Link} from "react-router-dom";






const Navbar = ({cartToggle}) => {
   const {shoppingCart} = useContext(cartContext);
    return(
        <nav className="navbar">
 <ul className="left">
 <li><Link to="/">Skillmover</Link></li>
 
   <li className="category">
         
                  <a className="course" href="">Explore Course</a>

        </li>
       
       
         
  <li><form>
     <input type="text" className="search" placeholder="Search Course"/>
     </form></li> 
 </ul>
 <ul className="right">
    <li onClick={cartToggle}><Link to="/cart"><span className="dollor"><i className="fas fa-cart-plus"></i></span><span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span></Link></li>
    <li className="button">
       <Button variant="contained" color="primary1" href="#contained-buttons">
          LOGIN
        </Button>
        </li>
         <li className="button">
       <Button variant="contained" color="primary1" href="#contained-buttons">
          REGISTER
        </Button>
        </li>
 </ul>
</nav>
    )

}

export default Navbar;