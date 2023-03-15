
import Card from '../../Universal/Card'
import styles from './CusineFilter.module.css'
import { useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { FaAngleDoubleUp } from 'react-icons/fa'

const CusineFilter = ({cusineFinder}) => {

    const [ showCusine, setShowCusine ] = useState(false)

    const selectCusine = () => {
        setShowCusine(!showCusine)
    }
    const cusineHandler = (event) => {
        cusineFinder(event.target.value)
    }

    return <Card className={styles.filterCard}>
            <h4>Do you know what are you looking for?</h4><h3 className={styles.cusineHeading}>Select Your Favourite Cusine!</h3>
            {!showCusine && <FaAngleDoubleDown onClick={selectCusine} className={styles.arrowButton}/>}
            {showCusine && <div>
                    <button  className={styles.btn}  name='American' value={'American'} onClick={cusineHandler}>American</button>
                    <button  className={styles.btn} value={'Japanese'} name="Japanese" onClick={cusineHandler}>Japanese</button>
                    <button  className={styles.btn} value={'Czech'} name="Czech" onClick={cusineHandler}>Czech</button>
                    <button  className={styles.btn} value={'German'} name="German" onClick={cusineHandler}>German</button>
                    <button className={styles.btn}  value={'Vietnamese'} name="Vietnamese" onClick={cusineHandler}>Vietnamese</button>
                    <button className={styles.btn}  value={'Mexican'} name="Mexican" onClick={cusineHandler}>Mexican</button>
                    <button className={styles.btn}  value={'Indian'} name="Indian" onClick={cusineHandler}>Indian</button>
                    <button  className={styles.btn} value={'French'} name="French" onClick={cusineHandler}>French</button>
                    <button className={styles.btn} value={'Italian'} name="Italian" onClick={cusineHandler}>Italian</button>
                <FaAngleDoubleUp className={styles.arrowButton} onClick={selectCusine}/>
        
            </div>}
            
    </Card> 
}

export default CusineFilter