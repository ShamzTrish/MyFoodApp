import Modal from '../Universal/Modal'
import styles from './CheckOutCart.module.css'
import { useContext, useState, useRef } from 'react'
import cartContext from '../store/cartContext'



const CheckOutCart = ({setShowCheckOut}) => {
    
    const [ isSubmitting , setIsSubmmitting ] = useState(false)
    const [ submitted, setSubmitted ] = useState(false)

    const [formInputsValid, setFormInputsValid ] = useState({
        name:true,
        street: true,
        city: true,
        postalCode: true
    })
    
    const context = useContext(cartContext)

    // budeme pouzivat useRef na ukladani values z inputu
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const cityInputRef = useRef()
    const postalCodeInputRef = useRef()

    
    const formSubmit = (event) => {
        event.preventDefault()

        // musime si nekam ulozit values z inputu , dostaneme je vzdycky pomoci current.value
        const enteredNameInput = nameInputRef.current.value
        const enteredStreetInput = streetInputRef.current.value
        const enteredCityInput = cityInputRef.current.value
        const enteredPostalCodeInput = postalCodeInputRef.current.value

         // kontrolujeme jestli jsou inputs valid
        const enteredNameIsValid = enteredNameInput.trim() !== ''
        const enteredStreetIsValid = enteredStreetInput.trim() !== ''
        const enteredCityIsValid = enteredCityInput.trim() !== ''
        const enteredPostalCodeIsValid = enteredPostalCodeInput.trim().length === 5

        setFormInputsValid({
            name:enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid 

        if(!formIsValid){
             return // kdyz je tam nejaky ERRRORRR tak kod se diky return ukonci a nepusti uzivatele dal dokud nebude splnena vallidation
        }

        //subbmiting to backEnd database
        const submit = async () => {
            setIsSubmmitting(true)
            await fetch('https://food-app-57a05-default-rtdb.firebaseio.com/order.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        name: enteredNameInput,
                        street: enteredStreetInput,
                        city: enteredCityInput,
                        postalCode: enteredPostalCodeInput
                    },
                    orderedItems: context.items
                })
            })
            setIsSubmmitting(false)
            setSubmitted(true)
            context.clearCart()
        }
        submit()
        
    }


    return <Modal onClick={ () => setShowCheckOut(false)}>
        { isSubmitting && <h4>One Moment Please...</h4>}
        { submitted &&  <h2>Your Order has been Proccessed !</h2>}

        {!submitted && !isSubmitting && <div className={styles.checkOut}>
            

                <h3 className={styles.orderSummary}>Your Order Summary Down Below : </h3>
                <div className={styles.checkOutItems}>
            {
                context.items.map( (oneSingleItem) => {
                    const { amount,id, name } = oneSingleItem
                   return <div key={id} className={styles.cartItem}>
                        <p>{name}  -  x{amount}</p>
                            </div>
                })
            }

                </div>
             <div className={styles.actions}>
             <div className={styles.form}>
                    <h3 className={styles.CheckOutDetails}>Your Details:</h3>
                    <form onSubmit={formSubmit}>
                        <div className={`${styles.control} ${formInputsValid.name ? '' : styles.invalid}`}>
                                <label htmlFor="name">Name</label>
                            <div className={styles.input}>
                                <input type="text" id='name' ref={nameInputRef}/>
                                { !formInputsValid.name && <span>Please enter a valid name.</span>}
                            </div>
                        </div>
                        <div className={`${styles.control} ${formInputsValid.street ? '' : styles.invalid}`}>
                            <label htmlFor="street">Street</label>
                            <div className={styles.input}>
                                <input type="text" id='street' ref={streetInputRef}/>
                                { !formInputsValid.street && <span>Please enter a valid street name.</span>}
                            </div>
                        </div>
                        <div className={`${styles.control} ${formInputsValid.postalCode ? '' : styles.invalid}`}>
                            <label htmlFor="postal">Postal Code</label>
                            <div className={styles.input}>
                                <input type="text" id='postal' ref={postalCodeInputRef}/>
                                { !formInputsValid.postalCode && <span>Postal code has to have 5 characters.</span>}
                            </div>
                        </div>
                        <div className={`${styles.control} ${formInputsValid.city ? '' : styles.invalid}`}>
                            <label htmlFor="city">City</label>
                            <div className={styles.input}>
                                <input type="text" id='city' ref={cityInputRef }/>
                                { !formInputsValid.city && <span>Please enter a valid city.</span>}
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <button type='button' onClick={() => setShowCheckOut(false)}>Cancel</button>
                            <button className={styles.button}>Order</button>
                        </div>
                    </form>
                </div>
             </div>
        </div>
        }

    </Modal>
}

export default CheckOutCart