import React, { useEffect, useState } from "react";
import './Index.css';

import { useForm } from "react-hook-form";

const Booking = () => {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  const [habitaciones, setHabitaciones] = useState([]);
  const [habitacionesDisponible, setHabitacionesDisponible] = useState([]);

  const getRoom = (data) => {
    let result = []
    habitaciones.some(element => {
      if (data.cantidad <= element.cantidad) {
        result = element.bookings.filter(word => (data.start <= word.start) && (word.start <= data.end));
        console.log(result.length)
        if(result.length === 0){ 
          setHabitacionesDisponible(element)
        }
      }
      return (result.length === 0)
    });
  }
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    getRoom(data)
    console.log(habitacionesDisponible)
  };



  useEffect(() => {
    fetch('/habitaciones')
      .then(response => response.json())
      .then(json => setHabitaciones(json))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <h1 className=''>Bienvenidos al hotel </h1>
      <p>Puedes agendar tu habitacion</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="name">Nombre</label>
          <input type="text" className="form-control" id="name" aria-describedby="Name"{...register("name", { required: true })} required />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" {...register("email", { required: true })} required />
        </div>
        <div className="form-group">
          <label for="edad">Personas</label>
          <input type="number" className="form-control" min="1" max="6" {...register("cantidad", { required: true })} required />
        </div>
        <div className="form-group">
          <label for="edad">Fecha</label>
          ${day < 10 ? `0${day}` : `${day}`}
          <div className='date'>
            <input type="date" className="form-control" min={`${year}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`} max={`${year}-12-31`} {...register("start", { required: true })} required />
            <input type="date" className="form-control" min={`${year}-${month < 10 ? `0${month}` : `${month}`}-${day+1 < 10 ? `0${day+1}` : `${day+1}`}`} max={`${year}-12-31`} {...register("end", { required: true })} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Booking