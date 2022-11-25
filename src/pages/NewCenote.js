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
                    "Content-type": "aplication/json",
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