import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginUserForm from "../components/user/LoginUserForm";

function LoginPage(props) {
  const history = useHistory();
  function logUserHandler(userData) {
    fetch(
      "http://3.228.7.193:1340/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        const token = data.auth_token;
        const id = data.data._id
        props.SetToken(token);
        props.SetId(id);
        
      })
      .then(() => {
        window.location.reload(false)
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
