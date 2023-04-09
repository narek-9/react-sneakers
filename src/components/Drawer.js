export default function Drawer() {
   return (
      <div
         style={{
            display: " none",
         }}
         className="overlay"
      >
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
               Корзина
               <img
                  className="removeBtn cu-p"
                  width={15}
                  height={15}
                  src="/img/btn-remove.svg"
                  alt="Remove"
               />
            </h2>
            <div className="items">
               <div className="cartItem d-flex align-center">
                  <div
                     style={{
                        backgroundImage: "url(/img/sneakers/1.jpg)",
                     }}
                     className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                     <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                     <b>12 999 руб․</b>
                  </div>
                  <img
                     className="removeBtn"
                     width={15}
                     height={15}
                     src="/img/btn-remove.svg"
                     alt="Remove"
                  />
               </div>
               <div className="cartItem d-flex align-center">
                  <div
                     style={{
                        backgroundImage: "url(/img/sneakers/1.jpg)",
                     }}
                     className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                     <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                     <b>12 999 руб․</b>
                  </div>
                  <img
                     className="removeBtn"
                     width={15}
                     height={15}
                     src="/img/btn-remove.svg"
                     alt="Remove"
                  />
               </div>
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
      </div>
   );
}
