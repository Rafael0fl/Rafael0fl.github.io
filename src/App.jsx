/* imagenes informativas */
import CSS from './App.module.css';
import unoJPG from './assets/collage/1.jpg';
import dosJPG from './assets/collage/2.jpg';
import tresJPG from './assets/collage/3.jpg';
import cuatroJPG from './assets/collage/4.jpg';
import cincoJPG from './assets/collage/5.jpg';
/* imagenes del albun */
import A1 from './assets/albun/1.jpg';
import A2 from './assets/albun/2.jpg';
import A3 from './assets/albun/3.jpg';
import A4 from './assets/albun/4.jpg';
import A5 from './assets/albun/5.jpg';
import A6 from './assets/albun/6.jpg';
import A7 from './assets/albun/7.jpg';
import A8 from './assets/albun/8.jpg';
import A9 from './assets/albun/9.jpg';

function App() {
  return (
    <div className={CSS.container}>
      {/* primera vista*/}
      <div className={CSS.card}>
        <img src={unoJPG} alt="imagen uno" className={CSS.imguno}/>
      </div>
      {/* album de scroll horizontal */}
      <div className={CSS.album}>
        <img src={A6} alt="imagen 6 del albun" className={CSS.imgV}/>
        <img src={A2} alt="imagen 2 del albun" className={CSS.imgV}/>
        <img src={A3} alt="imagen 3 del albun" className={CSS.imgV}/>
        <img src={A4} alt="imagen 4 del albun" className={CSS.imgV}/>
        <img src={A7} alt="imagen 7 del albun" className={CSS.imgV}/>
        <img src={A8} alt="imagen 8 del albun" className={CSS.imgV}/>
        <img src={A9} alt="imagen 9 del albun" className={CSS.imgV}/>
        <img src={A1} alt="imagen 1 del albun" className={CSS.imgH}/>
        <img src={A5} alt="imagen 5 del albun" className={CSS.imgH}/>
      </div>
      {/* ubicacion */}
      <div className={CSS.card}>
        <img src={dosJPG} alt="imagen dos" className={CSS.img}/>
        <div className={CSS.ubicacionInfo}>
          <a href="https://www.google.com/maps/place/Altura+V.+Del+Fatima,+San+Pablo+400,+Alderetes,+Tucum%C3%A1n/@-26.8017983,-65.1341341,17z/data=!4m6!3m5!1s0x94225f1a49694ef7:0x9cf82e03a8d656!8m2!3d-26.8012857!4d-65.1339156!16s%2Fg%2F11k54xb78p?hl=es&entry=ttu">
            salon de fiesas olea
          </a>
        </div>
      </div>
      {/* vestimenta */}
      <div className={CSS.card}>
        <img src={tresJPG} alt="imagen tres" className={CSS.img} />
      </div>
      {/* confirmar presencia */}
      <div className={CSS.card}>
        <img src={cuatroJPG} alt="imagen cuatro" className={CSS.img}/>
      </div>
      {/* saludo final */}
      <div className={CSS.card}>
        <img src={cincoJPG} alt="imagen cinco" className={CSS.img} />
      </div>
    </div>
  )
}

export default App


/*
  comentarios

  +

*/