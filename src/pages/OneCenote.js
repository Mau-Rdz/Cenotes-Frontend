import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../components/ui/OneCenote.module.css";
import UseId from "../components/App/UseId";

function OneCenotePage() {
  let { id } = useParams();
  const [loadedCenote, setLoadedCenote] = useState([]);
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
      });
  }, []);
  const link = "/new-review/" + loadedCenote._id + "/" + Id;
  return (
    <div>
      <div className={classes.divCentrar}>
        <h3>{loadedCenote.name}</h3>
        <img src={loadedCenote.photos} alt="cenote foto" />
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
