import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewItem from "../components/reviews/ReviewItem";

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

  return <div>Cenote especifico aquí hacemos diseño mamalon tienes todos los datos dentro de loadedCenote. Loaded cenote ya incluye los comentarios, usa un map para recorrerlos y les creas un reviewItem a cada uno, puede ver como aqui abajo
    {/* {loadedCenote.reviews.map((review) =>{
      return <ReviewItem
      autor = {review.autor}
      comentario = {review.comentario}
      calificacion = {review.calificacion}
      />
    })} */}
    
  </div>;
}

export default OneCenotePage;
