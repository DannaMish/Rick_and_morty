import style from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={style.card}>
         <button className={style.button} onClick={props.onClose}>X</button>
         <h2 className={style.h2}>{props.name}</h2>
         <h2 className={style.h2}>{props.species}</h2>
         <h2 className={style.h2}>{props.gender}</h2>
         <img className={style.image} src={props.image} alt="" />
      </div>
   );
}
 