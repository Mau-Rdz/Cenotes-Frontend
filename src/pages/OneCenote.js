import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../components/ui/OneCenote.module.css";
import UseId from "../components/App/UseId";
import ReviewList from "../components/reviews/ReviewList";

function OneCenotePage(props) {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCenote, setLoadedCenote] = useState([]);
  const { Id, setId } = UseId();

  useEffect(() => {
    setIsLoading(true);
    fetch(" http://3.228.7.193:1340/api/v1/cenotes/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const infoData = data.data;
        const cenote = {
          ...infoData,
        };
        setLoadedCenote(cenote);
        setIsLoading(false);
      });
  }, []);
  const link = "/new-review/" + loadedCenote._id + "/" + Id;
  return (
    <div>
      <div className={classes.divCentrar}>
        <h3>{loadedCenote.name}</h3>
        <img src={loadedCenote.photos} />
        {/* NO BORRAR DANI ESTO ES PARA LOS REVIEWS */}
        {/* <ReviewList list={loadedReviews} /> */}
      </div>
      <div>
        <Link to={link} className="btn btn-primary" href="#" role="button">
          Agregar review
        </Link>
      </div>
    </div>
  );
}
export default OneCenotePage;
