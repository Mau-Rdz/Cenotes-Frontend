import { useNavigate } from "react-router-dom";
import UseToken from "../components/App/UseToken";
import NewCenoteForm from "../components/cenote/NewCenoteForm";

function NewCenotePage(){
    const { token } = UseToken();
    const navigate = useNavigate();
    function addCenoteHandler(cenoteData){
        fetch(
            "http://44.204.131.75:1340/api/v1/cenotes/",
            {
                method: "POST",
                body: cenoteData,
                headers: {
                    // "Content-Type": "multipart/form-data",
                    "auth-token": token
                },
            }
        ).then(() =>{
            // console.log(cenoteData)
            navigate("/cenotes");
        }); 
    }
    return (
    <section>
        <NewCenoteForm onAddCenote={addCenoteHandler} />
    </section>
    )
}

export default NewCenotePage;