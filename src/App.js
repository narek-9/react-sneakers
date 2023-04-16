import { useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [cartOpened, setCartOpened] = useState(false);

   useEffect(() => {
      fetch("https://643bc0b844779455735ff7f1.mockapi.io/items")
         .then((res) => res.json())
         .then(setItems);
   }, []);

   const onAddToCart = ({ imageUrl, price, title }) => {
      setCartItems((prev) => [...prev, { imageUrl, price, title }]);
   };

   return (
      <div className="wrapper clear">
         {cartOpened && (
            <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
         )}
         <Header onClickCart={() => setCartOpened(true)} />
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div
                  style={{
                     position: "relative",
                  }}
                  className="search-block d-flex"
               >
                  <img
                     style={{
                        position: "absolute",
                        top: 12 + "px",
                        left: 5 + "px",
                     }}
                     width={22}
                     height={22}
                     src="/img/search.svg"
                     alt="Search"
                  />
                  <input type="" placeholder="Поиск..." />
               </div>
            </div>
            <div className="d-flex flex-wrap">
               {items.map(({ imageUrl, price, title }) => (
                  <Card
                     imageUrl={imageUrl}
                     price={price}
                     title={title}
                     onFavorite={() => console.log("Добавить в избранное")}
                     onPlus={({ imageUrl, price, title }) =>
                        onAddToCart({ imageUrl, price, title })
                     }
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
