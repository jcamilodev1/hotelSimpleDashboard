import React from 'react'
import './Index.css'
const Booking = () => {
  let date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  if (month < 10) {
    console.log(`${day}-0${month}-${year}`)
  } else {
    console.log(`${day}-${month}-${year}`)
  }
  return (
    <>
      <h1 className=''>Bienvenidos al hotel </h1>
      <p>Puedes agendar tu habitacion</p>
      <form>
        <div className="form-group">
          <label for="name">Nombre</label>
          <input type="text" className="form-control" id="name" aria-describedby="Name"/>
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
            <input type="date" className="form-control" id="exampleedadInputPassword1" min={`${year}-01-01`} max={`${year}-12-31`} />
            {
              <input type="date" className="form-control" id="exampleedadInputPassword1" min={`${year}-01-01`} max={`${year}-12-31`}  />
            }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Booking