import React, { useEffect, useState } from "react";
import './Index.css';

import { useForm, reset  } from "react-hook-form";
import Swal from 'sweetalert2'
const Booking = () => {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  let habitaciones
  let habitacionesDisponible
  const getRoom = (data) => {
    let result = []
    habitaciones.some(element => {
      if (data.cantidad <= element.cantidad) {
        result = element.bookings.filter(word => (data.start <= word.start) && (word.start <= data.end));
        if (result.length === 0) {
          habitacionesDisponible = element
        }
        else{
          habitacionesDisponible = []
        }
      }
      return (result.length === 0)
    });
  }
  const { register, handleSubmit } = useForm();
  const onSubmit =async  (data, e) => {
    habitaciones = await getRooms()
    getRoom(await data)
    console.log(habitacionesDisponible)
    if(habitacionesDisponible.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La habitacion ya esta ocupada para tus fechas',
      })
    }else{
      Swal.fire(
        'Tu solicitud ha sido exitosa',
        `Reservaste la habitacion con id: ${habitacionesDisponible.id}`,
        'success'
      )
    }
    habitacionesDisponible = []
    e.target.reset();
  };
  const getRooms = async () => {
    const result = await fetch('/habitaciones')
    const response = await result.json()
    return response
  }

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
          <div className='date'>
            <input type="date" className="form-control" min={`${year}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`} max={`${year}-12-31`} {...register("start", { required: true })} required />
            <input type="date" className="form-control" min={`${year}-${month < 10 ? `0${month}` : `${month}`}-${day + 1 < 10 ? `0${day + 1}` : `${day + 1}`}`} max={`${year}-12-31`} {...register("end", { required: true })} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Booking