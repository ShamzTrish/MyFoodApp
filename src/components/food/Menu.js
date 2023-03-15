import styles from './Menu.module.css'
import OneMealItem from './OneMealItem'
import Card from '../Universal/Card'
import CusineFilter from './cusineFilter/CusineFilter'
import { useState } from 'react'
import data from '../../data'



const Menu = () => {

    const [ showCusine, setShowCusine ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1); // current page number
    const itemsPerPage = 5; // number of items to display per page

     // calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // get the current page of items from the data array
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // create an array of page numbers to display in the pagination controls
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    // handle click on a page number
    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


    const cusineFinder = (selectedCusine) => {
      const cusineResult = data.filter( (oneMealItem) => {
       return oneMealItem.tags === selectedCusine
      })
      setShowCusine(cusineResult)
    }

    return <div className={styles.menuFilter}>
    <div className={styles.filterSelection} >
    <CusineFilter cusineFinder={cusineFinder}/>
    </div>
    <div className={styles.menu}>
     <section className={styles.meals}>
       <Card>
            {/* render the pagination controls */}
            { showCusine.length === 0 ?   <div className={styles.paginate}>
            {pageNumbers.map(number => (
            <button className={styles.paginateButton} key={number} onClick={() => handleClick(number)}>
                {number}
            </button>
            ))}
        </div> : <div></div> }
      
                { showCusine.length === 0 ?   <ul>
            {
                currentItems.map( (oneMeal) => {
                    return <OneMealItem {...oneMeal} key={oneMeal.id}/>
                })
            }

        </ul> :   <ul>
            {
                showCusine.map( (oneMeal) => {
                    return <OneMealItem {...oneMeal} key={oneMeal.id}/>
                })
            }

        </ul>}


      


        </Card> 
    </section>
    </div>
    </div>
}


export default Menu


