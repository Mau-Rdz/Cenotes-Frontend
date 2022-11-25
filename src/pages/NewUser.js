import { useHistory } from "react-router-dom";

import NewUserForm from "../components/user/NewUserForm";

function NewUserPage(){
    const history = useHistory();
    function addUserHandler(userData){
        fetch(
            "https://react-project-aa147-default-rtdb.firebaseio.com/users.json",
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "aplication/json",
                },
            }
        ).then(() =>{
            history.replace("/cenotes");
        }); 
    }
    return (
    <section>
        <NewUserForm onAddUser={addUserHandler} />
    </section>
    )
}

export default NewUserPage;