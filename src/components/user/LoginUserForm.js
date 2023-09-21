import "./LoginUserForm.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function LoginUserForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredemail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      email: enteredemail,
      password: enteredPassword,
    };

    props.onLoginUser(userData);
  }
  const link = "/new-user";
  return (
    <div className="divcentrar">
      <form onSubmit={submitHandler} className="card">
        <h1 className="titulo">Inicio de Sesión</h1>
        <div className="divsInputs">
          <br></br>
          <label htmlFor="email">Correo</label>
          <br></br>
          <input
            className="inputs"
            type="email"
            id="email"
            ref={emailInputRef}
            required
          />
        </div>
        <div className="divsInputs">
          <label htmlFor="pass">Contraseña</label>
          <br></br>
          <input
            className="inputs"
            type="password"
            id="pass"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className="divsInputs">
          <button className="btnCreate">Iniciar Sesión</button>
        </div>

        <div>
          <p>Si no tienes cuenta</p>
          <Link to={link} className="links">
            <p>Ingresa aquí</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginUserForm;
