import React, { useEffect, useState } from "react";
import './Index.css';



const Booking = () => {
  let date = new Date()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  // const compareDate = () => {
  //   if ((StartDate1 <= EndDate2) && (StartDate2 <= EndDate1)) {
  //     //overlapping dates
  //   }
  // }
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    fetch('/habitaciones')
      .then(response => response.json())
      .then(json => setHabitaciones(json))
      .catch(error => console.log(error));
  }, []);
  console.log(habitaciones)
  return (
    <>
      <h1 className=''>Bienvenidos al hotel </h1>
      <p>Puedes agendar tu habitacion</p>
      <form>
        <div className="form-group">
          <label for="name">Nombre</label>
          <input type="text" className="form-control" id="name" aria-describedby="Name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label for="edad">Personas</label>
          <input type="number" className="form-control" id="exampleedadInputPassword1" min="1" max="6" />
        </div>
        <div className="form-group">
          <label for="edad">Fecha</label>
          <div className='date'>
            <input type="date" className="form-control" id="exampleedadInputPassword1" min={`${year}-${month}-01`} max={`${year}-12-31`} />
            {
              <input type="date" className="form-control" id="exampleedadInputPassword1" min={`${year}-${month}-01`} max={`${year}-12-31`} />
            }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Booking