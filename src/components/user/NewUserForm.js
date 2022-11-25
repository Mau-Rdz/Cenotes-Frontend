import { useRef } from "react";

function NewCenoteForm(props) {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const photoInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredImage = photoInputRef.current.value;
    const enteredemail = emailInputRef.current.checked;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      name: enteredName,
      description: enteredDescription,
      photo: enteredImage,
      email: enteredemail,
      password: enteredPassword,
    };

    props.onAddUser(userData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Agregar nuevo cenote</h1>
        <div>
          <label htmlFor="name">Nombre del usuario</label>
          <input type="text" id="name" ref={nameInputRef} required />
        </div>
        <div>
          <label htmlFor="description">descripción del usuario</label>
          <input
            type="text"
            id="description"
            ref={descriptionInputRef}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Foto del usuario</label>
          <input type="url" id="photo" ref={photoInputRef} required />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div>
          <label htmlFor="pass">Contraseña</label>
          <input type="password" id="pass" ref={passwordInputRef} required />
        </div>
        <div>
          <button>Agregar Cenote</button>
        </div>
      </form>
    </div>
  );
}

export default NewCenoteForm;
