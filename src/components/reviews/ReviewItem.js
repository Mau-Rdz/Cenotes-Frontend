import "../reviews/ReviewItem.css"

function ReviewItem({autor,comment, score}) {
const link = '/users/'+autor
  return (
    <li>
      <div class="cardss">
        <p class="comment">{comment}</p>
        <p class="score">{score}</p>
      </div>
    </li>
  );
}

export default ReviewItem;