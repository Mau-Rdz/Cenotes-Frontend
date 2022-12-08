import ReviewItem from "./ReviewItem";
import { useState, useEffect } from "react";

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