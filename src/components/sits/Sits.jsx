import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";

const Sits = () => {


    return (
        <>
            <div className='sits'>
                <div className='sits_sits'>
                    <span className='sits_main'>
                        <div className='sits_title'>
                            <h3>Vuelo de salida</h3>
                            <div className='change_fligths'><Link className='change1' to="/">Cambiar vuelo </Link>
                            </div>
                        </div>

                        <h4>Fecha</h4>
                        <h5>Origen</h5>
                        <div className='sits_sits--chooseSits'>
                            <h6>Selecciona tus asientos</h6>
                            <div className='sits_sitsName'>
                                <button>A</button>
                                <button>B</button>
                                <button>C</button>
                                <button>D</button>
                            </div>
                            <div
                                className='sits_sits--chooseSits'>
                                <button> </button>
                                <button> </button>
                                <button> </button>
                                <button> </button>
                            </div>
                        </div>
                    </span>
                </div>
                <span className='sits_pay'>

                </span>
            </div>
        </>
    )
}
export default Sits;
