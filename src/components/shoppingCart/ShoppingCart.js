import styles from './ShoppingCart.module.css'
import Modal from '../Universal/Modal'
import { useContext } from 'react'
import cartContext from '../store/cartContext'



const ShoppingCart = ({setShowCart, setShowCheckOut}) => {

    const context = useContext(cartContext)
    
    const itemsInArray = context.items.length > 0
    
    let addItemHandler = (oneItem) => {
        context.addItem({
            ...oneItem,
            amount: 1
        })   
    }
    
    let removeItemHandler = (oneItem) => {
        context.removeItem({
            ...oneItem,
            amount: -1
        })
    }


    const showOrder = () => {
        setShowCheckOut(true)
        setShowCart(false)
    }
    
   
    

    return <Modal onClick={() => setShowCart(false)}>
        <ul className={styles.cartItems}>
            {!itemsInArray && <h2 className={styles.cartEmpty}>Uh oh..<span className={styles.cartEmpty2}>Empty cart ahead!</span> Time to fix that with some tasty dishes from our menu!</h2>}
            {
                context.items.map( (oneSingleItem) => {
                    const { amount,id, name, price } = oneSingleItem
                   return <li key={id} className={styles.cartItem}>
                            <div>
                                <h2 className={styles.itemName}>
                                    {name}
                                </h2>
                                <div className={styles.summary}>
                                    <span className={styles.price}>${price.toFixed(2)}</span>
                                    <span className={styles.amount}>x{amount}</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <button onClick={() => addItemHandler(oneSingleItem)}>+</button>
                                <button onClick={() => removeItemHandler(oneSingleItem)} className={styles.minus}>-</button>
                            </div>
                    </li>
                })
            }
        </ul>
        <div className={styles.total}>
            {itemsInArray && <span>Total Price</span>}
            {itemsInArray && <span>${context.totalAmount.toFixed(2)}</span>}
        </div>
        <div className={styles.actions}>
            {itemsInArray &&  <button onClick={showOrder}>Order</button>}
            <button onClick={() => setShowCart(false)}>Close</button>
        </div>
    </Modal>
}

export default ShoppingCart 