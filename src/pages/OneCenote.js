import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewItem from "../components/reviews/ReviewItem";
import classes from "../components/ui/OneCenote.module.css";


function OneCenotePage(props) {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCenote, setLoadedCenote] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-project-aa147-default-rtdb.firebaseio.com/cenotes/" +
        id+'.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cenote = {
          id: id,
          ...data,
        };
        setLoadedCenote(cenote);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return ( <div className={classes.divCentrar}>
    {/* {loadedCenote.reviews.map((review) =>{
      return <ReviewItem
      autor = {review.autor}
      comentario = {review.comentario}
      calificacion = {review.calificacion}
      />
    })} */}

<div className={classes.sliderContainer}> 
    <ul>
      <li>
      <img alt="" src="https://i.pinimg.com/736x/05/bf/f8/05bff862d4ff8e862907a0da2a85ca1c.jpg"/>
      </li>
      <li>
      <img alt="" src="https://i.pinimg.com/736x/05/bf/f8/05bff862d4ff8e862907a0da2a85ca1c.jpg"/>
      </li>
      <li>
      <img alt="" src="https://i.pinimg.com/736x/05/bf/f8/05bff862d4ff8e862907a0da2a85ca1c.jpg"/>
      </li>
    </ul>

  

  </div>  
</div>
);
}

export default OneCenotePage;
