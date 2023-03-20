import logo from "../../images/Divinero.png";
import styles from "./Index.module.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <header>
          <h2>Divinero</h2>
        </header>
        <p>
          Welcome to our <strong>WORLD </strong>cuisine restaurant!
          <br />
          Our menu is a journey around the globe, featuring dishes from every
          continent that will tantalize your taste buds and take your palate on
          an adventure.
          <br />
        </p>
        <footer>
          <Link to="/menu-page" className={styles.link}>
            MENU
          </Link>
        </footer>

        <img className={styles.logo} src={logo} alt="" />
      </div>
    </section>
  );
};

export default Index;
