import { Link } from "react-router-dom";
import classes from "./CenoteItem.module.css";
import Card from "../ui/Card";

function CenoteItem(props) {
  const link = "/cenotes/"+props.id
  return (
    <li>
      <Card>
        <Link to={link}>
        <div>
          <img className={classes.imgcenote} src={props.photos} alt={props.name} />
        </div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        </Link>
      </Card>
    </li>
  );
}

export default CenoteItem;
