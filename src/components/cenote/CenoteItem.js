import { Link } from "react-router-dom";
import classes from "./CenoteItem.module.css";
import Card from "../ui/Card";

function CenoteItem(props) {
  const link = "/cenotes/"+props.id
  return (
    <li>
      <Card>
        <Link to={link} className={classes.linkTxt}>
        <div>
          <img className={classes.imgcenote} src={props.photos} alt={props.name} />
        </div>
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
        </Link>
      </Card>
    </li>
  );
}

export default CenoteItem;
