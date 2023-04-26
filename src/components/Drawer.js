export default function Drawer({ onRemove, onClose, items = [] }) {
   return (
      <div className="overlay">
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
               Корзина
               <img
                  onClick={onClose}
                  className="removeBtn cu-p"
                  width= {15}
                  height={15}
                  src="/img/btn-remove.svg"
                  alt="Remove"
               />
            </h2>

            {
               items.length ? 
               <div>

               <div className="items">
               {items.map(({ title, price, imageUrl, id }) => {
                  return (
                     <div className="cartItem d-flex align-center">
                        <div
                           style={{
                              backgroundImage: `url(${imageUrl})`,
                           }}
                           className="cartItemImg"
                           ></div>

                        <div className="mr-20 flex">
                           <p className="mb-5">{title}</p>
                           <b>{price} руб․</b>
                        </div>
                        <img
                           onClick={() => onRemove(id)}
                           className="removeBtn"
                           width={15}
                           height={15}
                           src="/img/btn-remove.svg"
                           alt="Remove"
                           />
                     </div>
                  );
               })}
            </div>
                  <div className="cartTotalBlock">
                     <ul>
                        <li>
                           <span>Итого:</span>
                           <div></div>
                           <b>21 498 руб.</b>
                        </li>
                        <li>
                           <span>Налог 5%:</span>
                           <div></div>
                           <b>1074 руб. </b>
                        </li>
                     </ul>
                     <button className="greenButton">
                        Оформить
                        <img
                           width={25}
                           height={25}
                           src="/img/arrow.svg"
                           alt="Arrow"
                           />
                     </button>
                  </div>

                           </div>
            : 
            <div className="cartEmpty d-felx align-center justify-center flex-column flex">
                     <img width='120px' height='120px' src="/img/empty-cart.png" alt="" className="mb-20" />
                     <h2>Корзина пустая</h2>
                     <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                     <button onClick={onClose} className="greenButton">
                        <img width={25} height={25} src="/img/arrow.svg" alt="Arrow" />
                        Вернуться назад
                     </button>
                  </div>  
            }            
            </div>
      </div>
   );
}



 