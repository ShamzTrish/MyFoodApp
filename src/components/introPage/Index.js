
import logo from '../../images/Divinero.png'
import styles from './Index.module.css'
import { Link } from 'react-router-dom'



const Index = () => {


    return  <section className={styles.banner}>

    <div className={styles.inner}>

        <header>
            <h2>Divinero</h2>
        </header>
        <p>Welcome to our <strong>WORLD </strong>cuisine restaurant!
        <br />
        Our menu is a journey around the globe, featuring dishes from every continent that will tantalize your taste buds and take your palate on an adventure.
        <br /></p>
        <footer>
        <Link to='/menu-page' className={styles.link}>MENU</Link>
                                          
        </footer>

        <img className={styles.logo} src={logo} alt="" />
    </div>

    </section>
         
            

            
}

export default Index


// Our chefs are masters of their craft, and they bring a wealth of culinary knowledge and experience to each dish they create. Whether you're craving spicy Indian curries, comforting Italian pastas, or refreshing Latin American ceviches, our menu has something for everyone. We believe that food has the power to bring people together, and our mission is to create a warm and welcoming atmosphere where you can savor delicious food and make unforgettable memories. So come and join us for a culinary voyage that will transport you to every corner of the world