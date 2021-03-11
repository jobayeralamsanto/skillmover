export const CartReducer = (state, action) => {
    let {shoppingCart, totalPrice, } = state;
    let product;
    let index;
    let updatedPrice;
    
    switch(action.type){
        case 'ADD_TO_CART': 
        const check = shoppingCart.find(cart => cart.id === action.id);
        if(check){
            // return state;
            return {shoppingCart: [...shoppingCart], totalPrice, message: 'This is product is already in the cart!',};
        } else {
            product = action.products.find(product => product.id === action.id);
            product['qty'] = 1;
           
            return {shoppingCart: [product,...shoppingCart], totalPrice: totalPrice+product.price, message: '',};
        }
        break;
        case 'DELETE_PRODUCT':
            const filtered = shoppingCart.filter(cart => cart.id !== action.id);
            product = shoppingCart.find(cart => cart.id === action.id);
            // setAllPrice(allPrice - product.price * product.qty);
            updatedPrice = totalPrice - product.price ;
            
            return {shoppingCart: [...filtered], totalPrice: updatedPrice, message: '', }
            break;
        
      

       

       case 'EMPTY':
        return {shoppingCart: [], totalPrice: 0, message: '',}
        break;
    default: 
    return state;

    }
    

}
