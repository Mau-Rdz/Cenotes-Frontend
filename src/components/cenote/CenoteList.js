import CenoteItem from "./CenoteItem";
import "./CenoteList.css"

function CenoteList({cenotes}) {
  return (
    <ul className="ulCard">
      {cenotes.map((cenote) => {
        return (
          <CenoteItem
            key={cenote.id}
            id={cenote.id}
            name={cenote.name}
            location={cenote.location}
            photo={cenote.photos}
            reviews={cenote.reviews}
            bath={cenote.bathrooms}
            road={cenote.road}
            cost={cenote.cost}
          />
        );
      })}
    </ul>
  );
}

export default CenoteList;
