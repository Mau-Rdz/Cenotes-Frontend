import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewItem from "../components/reviews/ReviewItem";
import classes from "../components/ui/OneCenote.module.css";
import UseId from "../components/App/UseId";


function OneCenotePage(props) {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCenote, setLoadedCenote] = useState([]);
  const { Id, setId } = UseId();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      " http://3.228.7.193:1340/api/v1/cenotes/" +
        id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const infoData = data.data
        const cenote = {
          ...infoData,
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
  const link = "/new-review/" + loadedCenote._id + "/" +  Id;

  return ( <div className={classes.divCentrar}>
    <div>
      <Link to={link}>Agregar review</Link>
    </div>
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
