import styles from './AddAmount.module.css'
import { useState } from 'react'


const AddAmount = ({addItemToCartHandler}) => {

    const [amount, setAmount ] = useState(1)

    const addAmountHandler = (event) => {
        setAmount(event.target.value)
    }

    const formSubmit = (event) => {
        event.preventDefault()
        addItemToCartHandler(amount)
    }

    return <form className={styles.form} onSubmit={formSubmit}>
                <label htmlFor="amount"></label> 
                <input className={styles.input} id="amount" type="number" min='1' max="10" defaultValue='1' onChange={addAmountHandler} />
                <button>Add</button>
            </form>
}

export default AddAmount