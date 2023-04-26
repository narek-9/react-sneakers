import { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [favorites, setFavorites] = useState([
      {
         id: 1,
         title: "Мужские Кроссовки Nike Blazer Mid Suede",
         price: 12999,
         imageUrl: "/img/sneakers/1.jpg"
      },
      {
         id: 2, 
         title: "Мужские Кроссовки Air Max 270",
         price: 15600,
         imageUrl: "/img/sneakers/2.jpg" 
      }
   ]);
   const [searchValue, setSearchValue] = useState("");
   const [cartOpened, setCartOpened] = useState(false);
     
   useEffect(() => {
      axios
         .get("https://643bc0b844779455735ff7f1.mockapi.io/items")
         .then((res) => setItems(res.data));
 
      axios
         .get("https://643bc0b844779455735ff7f1.mockapi.io/cart")
         .then((res) => setCartItems(res.data));

      // axios
      //    .get("https://643bc0b844779455735ff7f1.mockapi.io/favorites")
      //    .then((res) => setFavorites(res.data));
   }, []);

   const onAddToCart = (obj) => {
      axios.post("https://643bc0b844779455735ff7f1.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
   };

   const onAddToFavorite =  async (obj) => {
      try {
         if(favorites.find((favObj) => favObj.id === obj.id)){
            axios.delete(`https://643bc0b844779455735ff7f1.mockapi.io/favorites/${obj.id}`);  
            setFavorites((prev) => prev.filter(item => item.id !== obj.id));
         }else{ 
            const { data } = await axios.post("https://643bc0b844779455735ff7f1.mockapi.io/favorites", obj);
            setFavorites((prev) => [...prev, data]);
         }
      } catch (error) {
         alert('Не удалось добавить в избранное')
      }
   };

   const onRemoveItem = (id) => { 
      axios.delete(`https://643bc0b844779455735ff7f1.mockapi.io/cart/${id}`);   
      setCartItems((prev) => prev.filter((item) => item.id !== id));
   };

   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value); 
   }
   return (
      <div className="wrapper clear">
         {cartOpened && (
            <Drawer
            onRemove={onRemoveItem}
            items={cartItems}
            onClose={() => setCartOpened(false)}
            />
            )}
            <Header onClickCart={() => setCartOpened(true)} />

         <Routes>
            <Route path="/" element={
               <Home items={items} searchValue={searchValue} 
               setSearchValue={setSearchValue}
               onChangeSearchInput={onChangeSearchInput}
               onAddToFavorite={onAddToFavorite}
               onAddToCart={onAddToCart}
               />
            } />
            <Route path="/favorites" element={
               <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
            } />
         </Routes>
   </div>
);
}  