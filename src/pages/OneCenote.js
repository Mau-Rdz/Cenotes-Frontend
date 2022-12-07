import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewItem from "../components/reviews/ReviewItem";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../components/ui/OneCenote.module.css";
import UseId from "../components/App/UseId";

function OneCenotePage(props) {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCenote, setLoadedCenote] = useState([]);
  const { Id, setId } = UseId();

  useEffect(() => {
    setIsLoading(true);
    fetch(" http://3.228.7.193:1340/api/v1/cenotes/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const infoData = data.data;
        const cenote = {
          ...infoData,
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
  const link = "/new-review/" + loadedCenote._id + "/" + Id;

  return (
    <div >
      <div>
        <Link to={link} class="btn btn-primary" href="#" role="button" >
          Agregar review
        </Link>
      </div>
      <div className={classes.divCentrar}>
        <Carousel variant="dark" slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thewholeworldisaplayground.com/wp-content/uploads/2020/11/Cenotes-Cancun.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://estaticos.muyinteresante.es/uploads/images/article/62f4bdee5bafe85a049c6414/Cenote.Sambula.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rivieramaya.mx/fotos/2015/03/cenotes-riviera-maya-cancun.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>
      
    </div>
  );
}

export default OneCenotePage;
