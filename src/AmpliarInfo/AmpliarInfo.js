import { Footer } from '../shared/Footer/Footer'
import './AmpliarInfo.css'
import { useLocation } from "react-router-dom"
export function AmpliarInfo(){

    let datosrecibidos=useLocation()
    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <div className="container">

                <div className="row my-5">
                    <div className="col-12 col-md-5 ">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"></img>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <h1 className="mt-3 display-5">{producto.precio}<span className="descuento ms-3">20 % off</span></h1><br></br>
                        <span className="badge text-bg-primary">Descuento del día</span><br></br>
                        <p className='mt-3'>Hasta 48 cuotas</p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/visa%20(1).png?alt=media&token=af06cabc-3791-49dc-b02e-f83f48a5bced' alt='' className='img-fluid'></img>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/american-express%20(3)%20(1).png?alt=media&token=b6bb848f-8c0e-4a54-b10c-6544e9ce68d0' alt='' className='img-fluid ms-3'></img><br/><br/>
                        <i className="bi bi-truck mt-5 text-success fs-3"><span className='ms-3 fs-6 fw-bold'>Envio gratis a nivel nacional</span></i>
                        <p>Conoce los tiempos de envio y las formas de entrega</p>
                        <i className="bi bi-arrow-clockwise mt-5 text-success fs-3"><span className='ms-3 fs-6 fw-bold'>Devolucion gratis</span></i>
                        <p>30 días para reembolso</p>
                        
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-6'>
                        <h2>Descripcion</h2>
                        <p>{producto.descripcion}</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        </>
    )

}