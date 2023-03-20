import styles from './Navbar.module.css'
import divinero from '../../images/Divinero.png'
import NavbarCartButton from './NavbarCartButton'


const Navbar = ({setShowCart}) => {

    return <>
    <div className={styles['main-image']}>
        </div>
        <div>
        <header className={styles.header}>
            <img src={divinero} alt="logo" className={styles.logo}/>
            <NavbarCartButton setShowCart={setShowCart}/>
        </header>
     
    </div>
    </>
}

export default Navbar