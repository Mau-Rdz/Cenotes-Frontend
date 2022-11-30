import { useRef } from "react";
import classes from "./NewReviewForm.module.css";

function NewReviewForm(props) {
  const commentInputRef = useRef();
  const scoreInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredComment = commentInputRef.current.value;
    const enteredScore = scoreInputRef.current.value;

    const reviewData = {
      comment: enteredComment,
      score: enteredScore,
    };

    props.onAddReview(reviewData);
  }

  return (
    <div className={classes.divcentrar}>
      <form onSubmit={submitHandler} className={classes.card}>
        <h1>Agregar nueva review</h1>
        <div className={classes.divInput}>
          <label htmlFor="comment">Comentario</label>
          <input
            className={classes.inputs}
            type="textarea"
            id="comment"
            ref={commentInputRef}
            required
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="score">Calificación</label>
          <input
            className={classes.inputs}
            type="range"
            id="score"
            ref={scoreInputRef}
            min="1"
            max="5"
            step="1"
            defaultValue="3"
            required
          />
        </div>
        <div>
          <br></br>
          <button className={classes.btnCreate}>Agregar Review</button>
        </div>
      </form>
    </div>
  );
}

export default NewReviewForm;
