import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

function ReviewList({id}) {
  const [loadedReviews, setLoadedReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(" http://44.204.131.75:1340/api/v1/reviews/" + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setLoadedReviews(data.data);
      console.log(data.data)
        setLoaded(true);
      });
  }, [])
    return (
    <ul>
      {loaded === true ? (
        loadedReviews.map((review) => {
          return (
            <ReviewItem
            autor={review.user}
            comment = {review.comment}
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