import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const link = "/";
  function buttonHandler() {
    localStorage.clear()
    window.location.reload(false)
  }
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={link}>
                <h3>{props.name}</h3>
              </Link>
            </li>
            <li>
              <button onClick={buttonHandler}>
                Boton que hace cosas si lo presionas
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
