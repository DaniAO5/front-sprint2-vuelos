import React, { useEffect, useState } from 'react'
import "./style.scss";
import { Link } from "react-router-dom"
import { fligthsSearch } from "../services/getData";


const Vuelos = () => {

  const [dataForm, setDataForm] = useState([]);
  const [arrayfiltered, setArrayfiltered] = useState([]);

  const vuelos = JSON.parse(sessionStorage.getItem('vuelos'));
  console.log(vuelos);


  useEffect(() => {
    const vuelos = JSON.parse(sessionStorage.getItem('vuelos'));
    console.log(vuelos);
  }, []);

  const getData = (element) => {
    console.log(element);
    setArrayfiltered(element);

  }
  console.log(arrayfiltered);


  return (
    <>
      <div className='choose'>
        <div className='choose_fligths'>
          <span className='choose_fligths--salida'>
            <div className='choose_fligths--salida_head'>
              <h3>Vuelo de salida</h3>
              <div className='change_fligths'><Link className='change1' to="/">Cambiar vuelo </Link></div>
            </div>
            <div className='choose_fligths--salida_body'>
              <h5>{vuelos[0].dateVuelo}</h5>
              <h6>origen: {vuelos[0].itinerario.origen}</h6>
              <div className='choose_info--vuelo' >
                <p className='choose_info--vuelo_salida' >{vuelos[0].itinerario.origen} ----- {vuelos[0].itinerario.destino}</p>
                <p className='choose_info--vuelo_salida' >Vuelo {vuelos[0].flight} / $ {vuelos[0].itinerario.precio}</p>
                <button className='select_vuelo1' >Seleccionar Vuelo</button>
              </div>
            </div>
          </span>
          <span className='choose_fligths--salida'>
            <div className='choose_fligths--salida_head'>
              <h3>Vuelo de regreso</h3>
              <div className='change_fligths'><Link className='change1' to="/">Cambiar vuelo </Link></div>
            </div>
            <div className='choose_fligths--salida_body'>
              <h5>{vuelos[1].dateVuelo}</h5>
              <h6>Origen: {vuelos[1].itinerario.origen}</h6>
              <div className='choose_info--vuelo'>
                <p className='choose_info--vuelo_salida'>{vuelos[1].itinerario.origen} ----- {vuelos[1].itinerario.destino}</p>
                <p className='choose_info--vuelo_salida'>{vuelos[1].flight} / $ {vuelos[1].itinerario.precio}</p>
                <button className='select_vuelo2' >Seleccionar Vuelo</button>
              </div>
            </div>
          </span>
        </div>
        <span className='choose_choose'>
          <div className='choose_choose--reserva'>
            <h4>Tu reservación</h4>
            <div>
              <p>vuelos</p>
            </div>
          </div>
          <div className='choose_choose--reserva'>
            <h4>Costo de vuelo</h4>
            <div>
              <p>costos</p>
            </div>
          </div>
          <Link className='change2' to="/sits">Seleccionar asientos</Link>
        </span>
      </div>
    </>
  )

}


export default Vuelos;