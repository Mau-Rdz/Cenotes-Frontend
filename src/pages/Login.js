import LoginUserForm from "../components/user/LoginUserForm";

function LoginPage({setToken, setId}) {
  function logUserHandler(userData) {
    fetch(
      "http://44.204.131.75:1340/api/v1/auth/login",
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
        setToken(token);
        setId(id);
        
      })
      .then(() => {
        window.location.reload(false)
      });
  }
  return (
    <section>
      <LoginUserForm onLoginUser={logUserHandler} />
    </section>
  );
}

export default LoginPage;
