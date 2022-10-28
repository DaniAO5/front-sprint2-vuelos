import React from "react";
import "./style.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { fligthsSearch} from "../services/getData";



const Search = () => {
  const navigate = useNavigate()
  const [dataForm, handleChangeInput] = useForm({
    origen: "",
    destino: "",
    salidaDate: "",
    regresoDate: "",
    pasajeros: "",
  });

  let initialVuelos = ['Medellín', 'Bogotá', 'Cartagena', 'Santa Marta']

  const fligthFiltered = async (vuelos) => {
    const vuelosFiltrados = await fligthsSearch(vuelos)
    

    if (vuelosFiltrados.length) {
      console.log(vuelosFiltrados);
      sessionStorage.setItem('vuelos', JSON.stringify(vuelosFiltrados));
      navigate('/vuelos')
          
    } else {
      Swal.fire(
        'Error',
        'No se encontraron vuelos en esas fechas',
        'error'
      )
    }
  }
  const handleSubmit = async (element) => {
    element.preventDefault();
    console.log(dataForm);
    if (
      dataForm.origen !== "" &&
      dataForm.destino !== "" &&
      dataForm.salidaDate !== "" &&
      dataForm.regresoDate !== "" &&
      dataForm.pasajeros !== ""
    ) {
      await fligthFiltered (dataForm);
    } else {

      Swal.fire('Debe llenar todos los campos para continuar')
    }
  }
  
  return (
    <>
      <div className="main">
        <div className="menu">
          <form className="menu__form" onSubmit={handleSubmit}>
            <h2> Busca un nuevo destino y comienza la aventura</h2>
            <p> Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
            <div className="option_travel">
              <button className="btn1">Viaje redondo</button>
                  <button className="btn2" >Viaje sencillo</button>
            </div>
            
              <div className="origen_destino">
                <span>
                  <select name="origen" onChange={handleChangeInput}>
                    <option value="">---</option>
                    {
                      initialVuelos.map((item,index)=>{
                        return(
                      <option key={index} value={item}> {item} </option>
                      )})}
                      </select>
                  <h5>Origen</h5>
                </span>
                <span>
                  <select name="destino" onChange={handleChangeInput}>
                    <option value="">---</option>
                    {
                      initialVuelos.map((item,index)=>{
                        return(
                      <option key={index}>{item} </option>
                      )})}
                  </select>
                  <h5>Seleccione su destino</h5>
                </span>
              </div>
              <div className="salida_regreso">
                <span>
                  <h5>Salida</h5>
                  <input
                    onChange={handleChangeInput}
                    type="date"
                    name="salidaDate"
                    className="main_form_control"
                    aria-label="Fecha"
                    aria-describedby="date"
                    min="2022-10-16"
                    max="2023-01-31"
                  />
                </span>
                <span>
                  <h5>Regreso</h5>
                  <input
                    onChange={handleChangeInput}
                    type="date"
                    name="regresoDate"
                    className="main_form_control"
                    aria-label="Fecha"
                    aria-describedby="date"
                    min="2022-10-23"
                    max="2023-01-31"
                  />
                </span>
              </div>
              <div className="pasajeros">
                <span>
                  <h6>Pasajeros</h6>
                  <select name="pasajeros" onChange={handleChangeInput}>
                    <option value="">---</option>
                    <option value="1"> 1 Adulto</option>
                    <option value="2"> 2 Adulto</option>
                    <option value="3"> 3 Adulto</option>
                    <option value="4"> 4 Adulto</option>
                  </select>
                </span>
                <span>
                  {" "}
                  <h5>¿Tienes un código de promoción?</h5>
                  <input
                    type="text"
                    placeholder="   -- -- -- --"
                  />
                </span>
              </div>
              <button type="submit" className="icon_plane">
          {" "}
          <p>Buscar vuelos </p>{" "}</button>
             
           
          </form>
        </div>

        <img src="./recource/desck-plane.jpg" alt="" />
      </div>
      <div className="menuPay">
        <h5>Pago Seguro</h5>
        <div className="menuPay_pay">
          <span className="menuPay_pay--tc">
            <h6>Tarjeta de crédito, tarjeta de débito y pago electrónico</h6>
            <img src="./recource/icons/pay1.png" alt="" />
          </span>
          <span className="menuPay_pay--efect">
            <h6>Efectivo en cualquiera de las sucursales participantes</h6>
            <img src="./recource/icons/pay2.png" alt="" />
          </span>
        </div>
      </div>
      <div className="services">
        <h5>Servicios disponibles</h5>
          <div className="services_cards">
            <div>
              <img src="./recource/icons/transporte.png" alt="" />
              <h6>Transporte</h6>
              <p>Renta un auto o reserva un shuttle.</p>
            </div>
            <div>
              <img src="./recource/icons/vueloshoteles.png" alt="" />
              <h6>Vuelos + Hoteles</h6>
              <p>Encuentra las mejores ofertas para tu viaje.</p>
            </div>
            <div>
              <img src="./recource/icons/grupos.png" alt="" />
              <h6>Grupos</h6>
              <p>Obtén una cotización para grupos de más de 9 personas.</p>
            </div>
            <div>
              <img src="./recource/icons/hoteles.png" alt="" />
              <h6>Hoteles</h6>
              <p>Reserva cualquier habitación en cualquier parte del mundo.</p>
            </div>
            <div>
              <img src="./recource/icons/carga.png" alt="" />
              <h6>Carga</h6>
              <p>Contamos con servicio de carga y mensajería.</p>
            </div>
          </div>
      </div>

    </>
  

  );
  }

export default Search;
