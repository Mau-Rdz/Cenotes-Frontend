import { useNavigate } from "react-router-dom";
import NewUserForm from "../components/user/NewUserForm";

function NewUserPage(){
    const navigate = useNavigate();
    function addUserHandler(userData){
        fetch(
            "http://44.204.131.75:1340/api/v1/auth/signin",
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json",
                },
            }
        )
        .then(() =>{
            navigate("/");
        }); 
    }
    return (
    <section>
        <NewUserForm onAddUser={addUserHandler} />
    </section>
    )
}

export default NewUserPage;