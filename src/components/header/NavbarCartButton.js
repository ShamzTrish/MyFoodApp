import styles from './NavbarCartButton.module.css'
import CartIcon from './CartIcon'
import cartContext from '../store/cartContext'

import { useContext } from 'react'


const NavbarCartButton = ({setShowCart}) => {

    const context = useContext(cartContext)
    
    return <button className={styles.button} onClick={() => setShowCart(true)}>
                <span className={styles.icon}> <CartIcon/> </span>
                <span>Your Cart</span>
                <span className={styles.badge}>${context.totalAmount.toFixed(2)}</span>
            </button>
}

export default NavbarCartButton