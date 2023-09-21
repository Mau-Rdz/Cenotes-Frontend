import { Link } from "react-router-dom";
import "./CenoteItem.css";

function CenoteItem({id, photo, name, description}) {
  return (
    <li className="liCard">
      <div className="card">
        <Link to={`/cenotes/${id}`} className="">
        <div className="divCenoteImg">
          <img className="cenoteImg" src={photo} alt={name} />
        </div>
        <div className="data">
          <h2 className="name">{name}</h2>
          <p className="description">{description}</p>
        </div>
        </Link>
      </div>
    </li>
  );
}

export default CenoteItem;
