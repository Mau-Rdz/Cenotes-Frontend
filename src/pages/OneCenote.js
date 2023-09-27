import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../components/ui/OneCenote.module.css";
import UseId from "../components/App/UseId";
import ReviewList from "../components/reviews/ReviewList";

function OneCenotePage() {
  let { id } = useParams();
  const [loadedCenote, setLoadedCenote] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const { Id } = UseId();

  useEffect(() => {
    fetch(" http://44.204.131.75:1340/api/v1/cenotes/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const infoData = data.data;
        const cenote = {
          ...infoData,
        };
        setLoadedCenote(cenote);
        setLoaded(true)
      });
  }, []);
  const link = "/new-review/" + loadedCenote._id + "/" + Id;

  return (
    <div>
      {loaded ? (
        <>
        <div className={classes.divimagen}>
        <img src={loadedCenote.photos} alt="cenote foto"/>
        </div>
        <br></br>
        <h3>{loadedCenote.name}</h3>
        <br></br>
        <h3>Precio: {loadedCenote.cost}</h3>
        <br></br>
        <h3>Descripción: {loadedCenote.description}</h3>
        <br></br>
        <div>
        <Link to={link} className="btn btn-primary" href="#" role="button">
          Agregar review
        </Link>
      </div>
      <div>
        <ReviewList reviews={loadedCenote.reviews} id={loadedCenote._id} />
      </div>
      </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
export default OneCenotePage;
