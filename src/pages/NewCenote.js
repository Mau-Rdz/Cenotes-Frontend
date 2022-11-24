import { useHistory } from "react-router-dom";

import NewCenoteForm from "../components/cenote/NewCenoteForm";

function NewCenotePage(){
    const history = useHistory();
    function addCenoteHandler(cenoteData){
        fetch(
            "https://react-project-aa147-default-rtdb.firebaseio.com/cenotes.json",
            {
                method: "POST",
                body: JSON.stringify(cenoteData),
                headers: {
                    "Cenote-type": "aplication/json",
                },
            }
        ).then(() =>{
            history.replace("/cenotes");
        }); 
    }
    return (
    <section>
        <h1>Agregar nuevo cenote</h1>
        <NewCenoteForm onAddCenote={addCenoteHandler} />
    </section>
    )
}

export default NewCenotePage;