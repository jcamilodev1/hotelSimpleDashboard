import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [rooms, setRomms] = useState([])


  useEffect(() => {
    fetch('/habitacionesAdmin')
      .then(response => response.json())
      .then(data => setRomms(data));
  }, [])
  console.log(rooms)
  return (
    <>
      <h1 className='mb-3'>Dashborad Admin Hotel</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Habitacion</th>
            <th scope="col">Cantidad Maxima</th>
            <th scope="col">Reserva</th>
          </tr>
        </thead>
        <tbody>
          {
          rooms.map(romm => (
            <tr key={`task_${romm.id}`}>
              <th scope="row">{romm.id}</th>
              <td>{romm.cantidad}</td>
              <td>{romm.bookings.map(booking => (
                <ul>
                  <li>Entrada: {booking.start}, Salida:{booking.end}</li>
                  <ul>
                    <li>{booking.person.name.toUpperCase()}</li>
                    <li>{booking.person.email}</li>
                    <li>{booking.person.cantidad}</li>
                    <li>Precio: ${booking.price}</li>
                  </ul>
                </ul>
                ))}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Dashboard