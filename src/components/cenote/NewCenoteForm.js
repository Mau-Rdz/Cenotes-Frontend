import { useRef } from "react";
import classes from "./NewCenoteForm.module.css";

function NewCenoteForm(props) {
  const nameInputRef = useRef();
  const locationInputRef = useRef();
  const photoInputRef = useRef();
  const bathInputRef = useRef();
  const roadInputRef = useRef();
  const costInputRef = useRef();
  

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredImage = photoInputRef.current.value;
    const enteredBath = bathInputRef.current.checked;
    const enteredRoad = roadInputRef.current.value;
    const enteredCost = costInputRef.current.value;

    const cenoteData = {
      name: enteredName,
      location: enteredLocation,
      photos: enteredImage,
      bathrooms: enteredBath,
      road: enteredRoad,
      cost: enteredCost,
    };

    props.onAddCenote(cenoteData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Nombre del cenote</label>
          <input type="text" id="title" ref={nameInputRef} required />
        </div>
        <div>
          <label htmlFor="location">Ubicación del cenote</label>
          <input type="url" id="location" ref={locationInputRef} required />
        </div>
        <div>
          <label htmlFor="photo">Foto del cenote</label>
          <input type="url" id="photo" ref={photoInputRef} required />
        </div>
        <div>
          <label htmlFor="bath">Baño</label>
          <input type="radio" name="bath" required /> No
          <input type="radio" name="bath" required ref={bathInputRef} /> Sí
        </div>
        <div>
          <label htmlFor="road">Camino</label>
          <select name="road" id="road" ref={roadInputRef} required>
            <option value="No pasan coches">No pasan coches</option>
            <option value="Terraceria">Terraceria</option>
            <option value="Pavimentado">Pavimentado</option>
          </select>
        </div>
        <div>
          <label htmlFor="cost">costo</label>
          <input type="number" id="cost" ref={costInputRef} required />
        </div>
        <div>
          <button>Agregar Cenote</button>
        </div>
      </form>
    </div>
  );
}

export default NewCenoteForm;