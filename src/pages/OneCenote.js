import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return <div>Cenote especifico aquí hacemos diseño mamalon tienes todos los datos dentro de loadedCenote</div>;
}

export default OneCenotePage;
