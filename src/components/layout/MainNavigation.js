import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const linkLogo = "/";
  const linkAgregar = "/new-cenote"
  function buttonHandler() {
    localStorage.clear()
    window.location.replace("/")
  }
  return (
    <header>
      <div>
        <nav>
          <ul className={classes.lista}>
            <li className={classes.li}>
              <Link to={linkLogo} className={classes.links}>
                <h3>{props.name}</h3>
              </Link>
            </li>
            <li className={classes.li}>
              <Link to={linkAgregar} className={classes.links}>
                <h3>Agregar cenote</h3>
              </Link>
            </li>
            <li className={classes.liLogout}>
              <button className={classes.btnLogout} onClick={buttonHandler}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
