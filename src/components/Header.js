import { Link } from "react-router-dom";

export default function Header({ onClickCart }) {
   return (
      <header className="d-flex justify-between align-center p-40">
         <Link to='/'>
            <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
               <div>
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовок</p>
               </div>
            </div>
         </Link>
         <ul className="d-flex">
            <li className="mr-30 cu-p" onClick={onClickCart}>
               <img width={18} height={18} src="/img/cart.png" alt="Корзина" />
               <span>1205 руб․</span>
            </li> 
            <li>
               <Link to='/favorites'>
                  <img className="mr-20 cu-p" width={18} height={18} src="/img/heart.png" alt="Закладки" />
               </Link>
            </li>
            <li>
               <img width={18} height={18} src="/img/user.png" alt="Пользователь" />
            </li>
         </ul>
      </header>
   );
}
