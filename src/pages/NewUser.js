import { useHistory } from "react-router-dom";
import NewUserForm from "../components/user/NewUserForm";

function NewUserPage(){
    const history = useHistory();
    function addUserHandler(userData){
        fetch(
            "http://3.228.7.193:1340/api/v1/auth/signin",
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json",
                },
            }
        )
        .then(() =>{
            history.replace("/");
        }); 
    }
    return (
    <section>
        <NewUserForm onAddUser={addUserHandler} />
    </section>
    )
}

export default NewUserPage;