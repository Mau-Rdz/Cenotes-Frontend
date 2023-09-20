import { Link } from "react-router-dom";
import { useNavigate }  from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation({name, deleteToken, deleteId}) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="base">
        <nav className="navegador">
          <ul className="lista">
            <li className="liHome">
              <Link to="/" className="home">
                <h3 className="">{name}</h3>
              </Link>
            </li>
            <li className="liAdd">
              <Link to="/new-cenote" className="links">
                <h3>Agregar cenote</h3>
              </Link>
            </li>
            </ul>
          <ul className="ulButton">
            <li className="liLogout">
              <button className="btnLogout" onClick={() => {
                deleteToken()
                deleteId()
                navigate("/")
                }}>
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
