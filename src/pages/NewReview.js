import { useParams, useHistory } from "react-router-dom";
import NewReviewForm from "../components/reviews/NewReviewForm";
import useToken from "../components/App/UseToken";

function NewReviewPage(){
    let { idCenote, idUser } = useParams();
    const { token, setToken } = useToken();
    const history = useHistory();
    function addReviewHandler(reviewData){
        fetch(
            "http://3.228.7.193:1340/api/v1/reviews/" + idCenote + "/" + idUser,
            {
                method: "POST",
                body: JSON.stringify(reviewData),
                headers: {
                    "auth-token": token,
                    "Content-type": "application/json",
                },
            }
        ).then((response) =>{
            // history.replace("/cenotes/"+cenoteId);
            console.log(response)
        });
    }
    return (
    <section>
        <NewReviewForm onAddReview={addReviewHandler} />
    </section>
    )
}

export default NewReviewPage;