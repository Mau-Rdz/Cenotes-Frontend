import ReviewItem from "./ReviewItem";
import { useState, useEffect } from "react";

function ReviewList(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedReviews, setLoadedReviews] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch("Ruta: http://3.228.7.193:1340/api/v1/reviews/")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const infoData = data.data;
            const reviews = [];
            for (const key in infoData) {
                const review = {
                  id: infoData[key]._id,
                  ...infoData[key],
                };
                reviews.push(review);
              }
            setLoadedReviews(reviews);
            setIsLoading(false);
          });
      }, []);
      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }
  
  
    return (
    <ul>
      {loadedReviews.map((review) => {
        return (
          <ReviewItem
            autor = {review.autor.name}
            comentario = {review.comentario}
            score = {review.score}
          />
        );
      })}
    </ul>
  );
}

export default ReviewList;