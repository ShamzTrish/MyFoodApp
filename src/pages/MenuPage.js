
import Navbar from "../components/header/Navbar"
import Menu from "../components/food/Menu"
import ShoppingCart from "../components/shoppingCart/ShoppingCart"
import CartProvider from "../components/store/CartProvider"

import { useState } from 'react'
import Footer from "../components/footer/Footer"

import CheckOutCart from "../components/shoppingCart/CheckOutCart"




const MenuPage = () => {

    const [ showCart, setShowCart] = useState(false)
    const [ showCheckOut, setShowCheckOut ] = useState(false)

    return <> 
            <CartProvider>                  
                    <Navbar setShowCart={setShowCart}/>
                    { showCart && <ShoppingCart setShowCart={setShowCart} setShowCheckOut={setShowCheckOut}/>}    
                    { showCheckOut && <CheckOutCart setShowCheckOut={setShowCheckOut}/>}
                    <Menu/>
                    <Footer/>
            </CartProvider>
    </>
    
}

export default MenuPage