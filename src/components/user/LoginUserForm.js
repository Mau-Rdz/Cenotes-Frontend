import classes from "./LoginUserForm.module.css";
import { useRef } from "react";

function LoginUserForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredemail = emailInputRef.current.checked;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      email: enteredemail,
      password: enteredPassword,
    };

    props.onLoginUser(userData);
  }
  return (
    <div className={classes.divcentrar}>
      <form onSubmit={submitHandler} className={classes.card}>
        <h1>Inicio de Sesión</h1>
        <div className={classes.divsInputs}>
          <br></br>
          <label htmlFor="email">Correo</label>
          <br></br>
          <input
            className={classes.inputs}
            type="email"
            id="email"
            ref={emailInputRef}
            required
          />
        </div>
        <div className={classes.divsInputs}>
          <label htmlFor="pass">Contraseña</label>
          <br></br>
          <input
            className={classes.inputs}
            type="password"
            id="pass"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.divsInputs}>
          <button className={classes.btnCreate}>Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
}

export default LoginUserForm;
