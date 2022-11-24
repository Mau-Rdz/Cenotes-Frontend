import {useState, useEffect} from "react"
import CenoteList from "../components/cenote/CenoteList"

function AllCenotesPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCenotes, setLoadedCenotes] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
          "https://react-project-aa147-default-rtdb.firebaseio.com/cenotes.json"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const cenotes = [];
    
            for (const key in data) {
              const cenote = {
                id: key,
                ...data[key],
              };
              cenotes.push(cenote);
            }
            setLoadedCenotes(cenotes);
            setIsLoading(false);
          });
      }, []);
    
      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }
      return (
        <section>
          <h1>All Cenotes Page</h1>
          {console.log(loadedCenotes)}
          <CenoteList cenotes={loadedCenotes} />
        </section>
      );
}

export default AllCenotesPage;