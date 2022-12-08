import { useRef } from "react";
import classes from "./NewUserForm.module.css";
import { Link } from "react-router-dom";

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
    let userData = {
      name: enteredName,
      email: enteredemail,
      password: enteredPassword,
    };
    if (enteredImage !== null) {
      userData = {
        name: enteredName,
        photo: enteredImage,
        email: enteredemail,
        password: enteredPassword,
      };
    }

    props.onAddUser(userData);
  }

  const link = "/";
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
          <label htmlFor="photo">Foto del usuario</label>
          <br></br>
          <br></br>
          <div className={classes.divcentrar}>
          <input
            controlId="formFile"
            className="mb-3"
            type="file"
            id="photo"
            ref={photoInputRef}
            accept="image/png  ,image/jpeg"
          />
          </div>
        </div>
        <div className={classes.divsInputs}>
          <button className={classes.btnCreate}>Crear cuenta</button>
        </div>
        <section>
          <div>
            <p>Si ya tienes cuenta</p>
            <Link to={link} className={classes.links} >
              <p>Ingresa aquí</p>
            </Link>
          </div>
        </section>
      </form>
    </div>
  );
}

export default NewCenoteForm;
