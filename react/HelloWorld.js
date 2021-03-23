import React from "react";
import Countdown from 'react-countdown';
import "./HelloWorld.css";

const HelloWorld = () => {

  //El mensaje que mostrará al terminar el temporizador
  const Completionist = () => <div className="temp-hotsale">
              <img src="https://www.hotsale.com.co/public/imgs/hot-sale-2021.svg" alt="Hot Sale Icon" />

    <p className="temp-hotsale__text">¡El HotSale Miniso ha comenzado!</p></div>;

  const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="temp-hotsale"> 
        <Completionist className="temp-hotsale__text" />
      </div> 
    } else {
      return <div className="container-temp" >
        <div className="container-temp__text"   >
         <div className="container-temp__responsive">
         <img src="https://www.hotsale.com.co/public/imgs/hot-sale-2021.svg" alt="Hot Sale Icon"/>
        <p >El HotSale Miniso inicia en:</p>
         </div>
        <span>{days} Días {hours} Horas {minutes} Minutos {seconds} Segundos</span>
        </div>
      </div> 
    }
  };
  
  return (
    //Establecer la fecha límite del temporizador
    <div>
    <Countdown
    date={"2021-03-24T00:00:00"}
    renderer={renderer}
  />
    </div>
  )
  }

export default HelloWorld;
