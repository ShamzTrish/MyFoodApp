import styles from './OneMealItem.module.css'
import AddAmount from './AddAmount'
import { useContext } from 'react'
import cartContext from '../store/cartContext'


const OneMealItem = ({id , name, description, price}) => {

    const context = useContext(cartContext)

    const addItemToCartHandler = (amount) => {
        context.addItem({
            name: name,
            price: price,
            id: id,
            amount: parseInt(amount)
        })
    }

    return <li key={id} className={styles.meal}>
        <div>
            <h3 className={styles.meal}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <h4 className={styles.price}>${price.toFixed(2)}</h4>
        </div>
        <div>
            <AddAmount addItemToCartHandler={addItemToCartHandler}/>
        </div>
    </li>
}

export default OneMealItem