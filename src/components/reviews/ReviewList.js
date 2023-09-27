import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

function ReviewList({id,reviews}) {
  const [loadedReviews, setLoadedReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(reviews)
    reviews.map((review) => {
      fetch(" http://44.204.131.75:1340/api/v1/reviews/" + review)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedReviews(data.data);
        setLoaded(true);
      });
    })
  }, [])
    return (
    <ul>
      {loaded === true ? (
        loadedReviews.map((review) => {
          return (
            <ReviewItem
            autor = {review.autor}
            comentario = {review.comentario}
            score = {review.score}
          />
          ) 
        })
      ) : (
        <div>
        loading
        </div>
      )}
    </ul>
  );
}
    
export default ReviewList;