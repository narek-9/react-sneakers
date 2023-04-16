import { useState } from "react";
import styles from "./Card.module.scss";

export default function Card({ title, price, imageUrl, onFavorite, onPlus }) {
   const [isAdded, setIsAdded] = useState(false);

   const onClickPlus = () => {
      onPlus({ title, price, imageUrl, onFavorite, onPlus });
      setIsAdded(!isAdded);
   };

   return (
      <div className={styles.card}>
         <div onClick={onFavorite} className={styles.favorite}>
            <img
               width={15}
               height={15}
               src="/img/heart-unliked.svg"
               alt="Unliked"
            />
         </div>
         <img width={133} height={112} src={imageUrl} alt="" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена: </span>
               <b>{price} руб.</b>
            </div>
            <button className="button" onClick={onClickPlus}>
               <img
                  width={11}
                  height={11}
                  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                  alt=""
               />
            </button>
         </div>
      </div>
   );
}
