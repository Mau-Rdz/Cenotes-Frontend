import classes from "./CenoteList.module.css";
import CenoteItem from "./CenoteItem";

function CenoteList(props) {
  return (
    <ul>
      {props.cenotes.map((cenote) => {
        return (
          <CenoteItem
            key={cenote.id}
            id={cenote.id}
            name={cenote.name}
            location={cenote.location}
            photos={cenote.photos}
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
