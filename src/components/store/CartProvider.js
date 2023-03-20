import CartContext from "./cartContext"
import { useState } from "react"

const CartProvider = (props) => {

    const [ itemsValue, setItemsValue ] = useState([])
    const [ totalPrice, setTotalPrice ] = useState(0)

    const addItemToCartHandler = (oneItem) => {
        setTotalPrice((previousState) => previousState + oneItem.amount * oneItem.price)
        
        const clickedItem = itemsValue.filter( (oneFilteredItem) => {
            return oneFilteredItem.id === oneItem.id
        })
        
        let finalItems = itemsValue

        if(clickedItem.length > 0){
           const findIndex = itemsValue.findIndex( (oneItemIndex) => {
                return oneItemIndex.id === oneItem.id
            })
            
            const joinItems = {
                ...clickedItem[0],
                amount: clickedItem[0].amount + oneItem.amount
            }
            finalItems[findIndex] = joinItems
        
        } else {

            finalItems = [...itemsValue, oneItem]
        }

        setItemsValue(finalItems)
    }

    const removeItemFromCartHandler = (oneItem) => {
        
        setTotalPrice((previousState) => previousState - oneItem.price)

        const  clickedItem = itemsValue.filter( (oneFilteredItemItem) => {
            return oneFilteredItemItem.id === oneItem.id
        })

        let finalItems = itemsValue

        if(clickedItem[0].amount === 1){
            finalItems = itemsValue.filter ( ( oneFilteredItem ) => {
                return oneFilteredItem.id !== oneItem.id
            })
        } else {
            const findIndex = itemsValue.findIndex( (oneItemIndex) => {
                return oneItemIndex.id === oneItem.id
            })

            const updatedItem = {
                ...clickedItem[0],
                amount: clickedItem[0].amount - 1
            }

            finalItems[findIndex] = updatedItem
        }
        
        setItemsValue(finalItems)
    }


    const clearCartHandler = () => {
        setItemsValue([])
        setTotalPrice(0)
    }

    const cartContext = {
        items: itemsValue,
        totalAmount: totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
    }
 
    return <CartContext.Provider value={cartContext}>
            {props.children}
         </CartContext.Provider>
}

export default CartProvider