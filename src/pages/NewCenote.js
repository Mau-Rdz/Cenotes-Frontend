import { useHistory } from "react-router-dom";
import UseToken from "../components/App/UseToken";
import NewCenoteForm from "../components/cenote/NewCenoteForm";

function NewCenotePage(){
    const { token, setToken } = UseToken();
    const history = useHistory();
    function addCenoteHandler(cenoteData){
        fetch(
            "http://3.228.7.193:1340/api/v1/cenotes/",
            {
                method: "POST",
                body: JSON.stringify(cenoteData),
                headers: {
                    "Content-type": "application/json",
                    "auth-token": token
                },
            }
        ).then(() =>{
            history.replace("/cenotes");
        }); 
    }
    return (
    <section>
        <NewCenoteForm onAddCenote={addCenoteHandler} />
    </section>
    )
}

export default NewCenotePage;