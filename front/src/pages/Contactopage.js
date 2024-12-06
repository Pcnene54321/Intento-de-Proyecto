import React from 'react';
import "./Styles/Contactopage.css"

const Contactopage = () => {
  return (
    <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for= "Nombre" >Nombre:</label>
                        <input type= "text" name= ""/>
                    </p>
                    <p>
                        <label for= "Email" >Email:</label>
                        <input type= "text" name= ""/>
                    </p>
                    <p>
                        <label for= "Mensaje" >Mensaje:</label>
                        <textarea name= ""></textarea>
                    </p>
                    <p>
                        <label for= "Telefono" >Teléfono:</label>
                        <input type= "text" name= ""/>
                    </p>
                    <p>
                        <input type= "submit" value= "Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También pueden contactarse con nosotros por los siguientes medios</p>
                <ul>
                    <li>Teléfono: <p>32749234</p></li>
                    <li>Email: <p>osoviajeroparatodos2.com.ar</p></li>
                    <li>Seguinos en Facebook como: <p>Viajero.book</p></li>
                    <li>Seguinos en Twiter como: <p>Viajero.booking</p></li>
                    <li>Seguinos en Instagram como: <p>Viajero.book</p></li>
                </ul>
            </div>
        </main>
  )
}
export default Contactopage;