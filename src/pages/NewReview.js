import { useParams, useNavigate } from "react-router-dom";
import NewReviewForm from "../components/reviews/NewReviewForm";
import useToken from "../components/App/UseToken";

function NewReviewPage(){
    let { idCenote, idUser } = useParams();
    const { token } = useToken();
    const navigate = useNavigate();
    function addReviewHandler(reviewData){
        fetch(
            "http://44.204.131.75:1340/api/v1/reviews/" + idCenote + "/" + idUser,
            {
                method: "POST",
                body: JSON.stringify(reviewData),
                headers: {
                    "auth-token": token,
                    "Content-type": "application/json",
                },
            }
        ).then((response) =>{
            navigate("/cenotes/");
            // console.log(response)
        });
    }
    return (
    <section>
        <NewReviewForm onAddReview={addReviewHandler} />
    </section>
    )
}

export default NewReviewPage;