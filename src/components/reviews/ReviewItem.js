import { Link } from 'react';
import Card from "../ui/Card";

function ReviewItem(props) {
const link = '/users/'+props.autor.id
  return (
    <li>
      <Card>
        <div>
            <Link to={link}>
            <h3>{props.autor}</h3>
            </Link>
            <p>{props.comentario}</p>
            <p>{props.score}</p>
        </div>
      </Card>
    </li>
  );
}

export default ReviewItem;