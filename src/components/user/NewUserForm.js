import { useRef } from "react";
import "./NewUserForm.css";
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
    <div className="divcentrar">
      <form onSubmit={submitHandler} className="card">
        <h1>Crear cuenta</h1>
        <div className="divsInputs">
          <label htmlFor="name">Nombre del usuario</label>
          <input
            className="inputs"
            type="text"
            id="name"
            ref={nameInputRef}
            required
          />
        </div>
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
          <label htmlFor="photo">Foto del usuario</label>
          <br></br>
          <br></br>
          <div className="divcentrar">
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
        <div className="divsInputs">
          <button className="btnCreate">Crear cuenta</button>
        </div>
        <section>
          <div>
            <p>Si ya tienes cuenta</p>
            <Link to={link} className="links">
              <p>Ingresa aquí</p>
            </Link>
          </div>
        </section>
      </form>
    </div>
  );
}

export default NewCenoteForm;
