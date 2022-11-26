import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginUserForm from "../components/user/LoginUserForm";

function LoginPage() {
  const history = useHistory();
  function logUserHandler(userData) {
    fetch(
      "https://react-project-aa147-default-rtdb.firebaseio.com/cuentas.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "aplication/json",
        },
      }
    ).then(() => {
      history.replace("/cenotes");
    });
  }
  const link = "/new-user";
  return (
    <section>
      <LoginUserForm onLoginUser={logUserHandler} />
      <div>
        <p>Si no tienes cuenta</p>
        <Link to={link}>
          <p>Ingresa aquí</p>
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
