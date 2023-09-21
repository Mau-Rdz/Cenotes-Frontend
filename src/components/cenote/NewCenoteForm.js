import { useRef, useState } from "react";
import "./NewCenoteForm.css";

function NewCenoteForm(props) {
  const nameInputRef = useRef();
  const locationInputRef = useRef();
  const descriptionInputRef = useRef();
  const [photo, setPhoto] = useState([]);
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
    const enteredDescription = descriptionInputRef.current.value;
    const enteredBath = bathInputRef.current.checked;
    const enteredRoad = roadInputRef.current.value;
    const enteredCost = costInputRef.current.value;
    var cenoteData = new FormData();
    cenoteData.append("name",enteredName);
    cenoteData.append("location",enteredLocation);
    cenoteData.append("description",enteredDescription);
    if(enteredBath === true){
    cenoteData.append("bathrooms",true);
    }
    else{
    cenoteData.append("bathrooms",false);
    }
    cenoteData.append("road",enteredRoad);
    cenoteData.append("cost",parseInt(enteredCost));
    if(photo.length !== 0 ){
      for (const file of photo) {
        cenoteData.append("photo", file);
      }
    }
    props.onAddCenote(cenoteData);
  }

  return (
    <div className="divcentrar">
      <form onSubmit={submitHandler} className="card" encType="multipart/form-data">
        <h1 className="titulo">Agregar nuevo cenote</h1>
        <div className="divInput">
          <label htmlFor="name">Nombre del cenote</label>
          <input
            className="inputs"
            type="text"
            id="name"
            ref={nameInputRef}
            required
          />
        </div>
        <div className="divInput">
          <label htmlFor="location">Ubicación del cenote</label>
          <input
            className="inputs"
            type="text"
            id="location"
            ref={locationInputRef}
            required
          />
        </div>
        <div className="divInput">
          <label htmlFor="description">Descripción del cenote</label>
          <input
            className="inputs"
            type="text"
            id="description"
            ref={descriptionInputRef}
            required
          />
        </div>
        <div className="divInput">
          <label htmlFor="photo">Foto del cenote</label>
          <br></br>
          <br></br>
          <input
            className="fileselect"
            /* name="photo" */
            type="file"
            id="photo"
            onChange={handleFileEvent}
            accept="image/png  ,image/jpeg"
          />
        </div>
        <div className="divInput">
          <br></br>
          <label htmlFor="bath">Baño</label>
          <br></br>
          <input type="radio" name="bath" required /> No
          <input type="radio" name="bath" required ref={bathInputRef} /> Sí
        </div>
        <div className="divInput">
          <br></br>
          <label htmlFor="road">Camino</label>
          <br></br>
          <select
            className="inputs"
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
            className="inputs"
            type="number"
            id="cost"
            ref={costInputRef}
            required
          />
        </div>
        <div>
          <br></br>
          <button className="btnCreate">Agregar Cenote</button>
        </div>
      </form>
    </div>
  );
}

export default NewCenoteForm;
