import { useRef } from "react";
import classes from "./NewUserForm.module.css";

function NewCenoteForm(props) {
  const nameInputRef = useRef();
  const photoInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = photoInputRef.current.value || null;
    const enteredemail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const userData = {
      name: enteredName,
      email: enteredemail,
      password: enteredPassword,
    };
    if (enteredImage !== null) {
      const userData = {
        name: enteredName,
        photo: enteredImage,
        email: enteredemail,
        password: enteredPassword,
      };
    }

    props.onAddUser(userData);
  }

  return (
    <div className={classes.divcentrar}>
      <form onSubmit={submitHandler} className={classes.card}>
        <h1>Crear cuenta</h1>
        <div className={classes.divsInputs}>
          <label htmlFor="name">Nombre del usuario</label>
          <input
            className={classes.inputs}
            type="text"
            id="name"
            ref={nameInputRef}
            required
          />
        </div>
        <div className={classes.divsInputs}>
          <label htmlFor="photo">Foto del usuario</label>
          <input
            className={classes.inputs}
            type="url"
            id="photo"
            ref={photoInputRef}
          />
        </div>
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
          <button className={classes.btnCreate}>Crear cuenta</button>
        </div>
      </form>
    </div>
  );
}

export default NewCenoteForm;
