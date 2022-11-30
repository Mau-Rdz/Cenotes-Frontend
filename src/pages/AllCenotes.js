import {useState, useEffect} from "react"
import CenoteList from "../components/cenote/CenoteList"

function AllCenotesPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCenotes, setLoadedCenotes] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
          "http://3.228.7.193:1340/api/v1/cenotes/"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const infoData = data.data
            const cenotes = [];
            for (const key in infoData) {
              const cenote = {
                id: infoData[key]._id,
                ...infoData[key],
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
          
          <CenoteList cenotes={loadedCenotes} />
          
        </section>
        
      );
}

export default AllCenotesPage;