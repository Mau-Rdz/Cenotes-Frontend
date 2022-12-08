import { useRef, useState } from "react";
import classes from "./NewCenoteForm.module.css";

function NewCenoteForm(props) {
  const nameInputRef = useRef();
  const locationInputRef = useRef();
  const [ photo, setPhoto ] = useState([]);
  const bathInputRef = useRef();
  const roadInputRef = useRef();
  const costInputRef = useRef();

  const handleFileEvent = (e) => {
    setPhoto(e.target.files);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;    
    const enteredBath = bathInputRef.current.checked;
    const enteredRoad = roadInputRef.current.value;
    const enteredCost = costInputRef.current.value;

    const cenoteData = {
      name: enteredName,
      location: enteredLocation,
      bathrooms: enteredBath,
      road: enteredRoad,
      cost: enteredCost,
    };
    if(photo.length !== 0){
      cenoteData.photo = photo
    }
    
    props.onAddCenote(cenoteData)
  }

  return (
    <div className={classes.divcentrar}>
      <form onSubmit={submitHandler} className={classes.card}>
        <h1>Agregar nuevo cenote</h1>
        <div className={classes.divInput}>
          <label htmlFor="name">Nombre del cenote</label>
          <input
            className={classes.inputs}
            type="text"
            id="name"
            ref={nameInputRef}
            required
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="location">Ubicación del cenote</label>
          <input
            className={classes.inputs}
            type="url"
            id="location"
            ref={locationInputRef}
            required
          />
        </div>
        <div className={classes.divInput}>
          <label htmlFor="photo">Foto del cenote</label>
          <br></br>
          <br></br>
          <input
            className={classes.fileselect}
            /* name="photo" */
            type="file"
            multiple
            id="photo"
            onChange={handleFileEvent}
            accept="image/png  ,image/jpeg"
          />
        </div>
        <div className={classes.divInput}>
          <br></br>
          <label htmlFor="bath">Baño</label>
          <br></br>
          <input type="radio" name="bath" required /> No
          <input type="radio" name="bath" required ref={bathInputRef} /> Sí
        </div>
        <div className={classes.divInput}>
          <br></br>
          <label htmlFor="road">Camino</label>
          <br></br>
          <select
            className={classes.inputs}
            name="road"
            id="road"
            ref={roadInputRef}
            required
          >
            <option value="No pasan coches">No pasan coches</option>
            <option value="Terraceria">Terraceria</option>
            <option value="Pavimentado">Pavimentado</option>
          </select>
        </div>
        <div>
          <label htmlFor="cost">Precio</label>
          <br></br>
          <input
            className={classes.inputs}
            type="number"
            id="cost"
            ref={costInputRef}
            required
          />
        </div>
        <div>
          <br></br>
          <button className={classes.btnCreate}>Agregar Cenote</button>
        </div>
      </form>
    </div>
  );
}

export default NewCenoteForm;
