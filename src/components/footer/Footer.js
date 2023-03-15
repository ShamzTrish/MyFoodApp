import styles from './Footer.module.css'
import divinero from '../../images/Divinero.png'
import { faFacebook, faInstagram, faTwitter,} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {

  return <footer className={styles['main-footer']}>
  <div className={styles['footer-content']}>
      <div>
      <img className={styles.logo} src={divinero} alt="logo"/>
      </div>
      <div className={styles.ikony}>
        <ul>
          <a target="_blank" href='https://www.facebook.com/profile.php?id=1775273260'><FontAwesomeIcon icon={faFacebook} /></a>
          <a target="_blank" href='https://www.instagram.com/ourr.travels/?hl=cs'><FontAwesomeIcon icon={faInstagram} /></a>
          <a target="_blank" href='https://twitter.com/PetrPospisil17'><FontAwesomeIcon icon={faTwitter} /></a>
        <p>&copy; 2023 Divinero. All rights reserved.</p>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3>Contact Us!</h3>
          <p>18 Buckingham St, Arrowtown</p>
          <p>info@divinero.nz</p>
          <p>03-442 0885</p>
      </div>
  </div>

  </footer>
}



 export default Footer