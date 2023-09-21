import ReviewItem from "./ReviewItem";

function ReviewList(props) {
    return (
    <ul>
      {props.loadedReviews.map((review) => {
        return (
          <ReviewItem
            autor = {review.autor}
            comentario = {review.comentario}
            score = {review.score}
          />
        );
      })}
    </ul>
  );
}
    
export default ReviewList;