import { Link } from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  function buttonHandler() {}
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <h3>{props.name}</h3>
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