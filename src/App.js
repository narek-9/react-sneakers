import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
   {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageUrl: "/img/sneakers/1.jpg",
   },
   {
      title: "Мужские Кроссовки Air Max 270",
      price: 15600,
      imageUrl: "/img/sneakers/2.jpg",
   },
   {
      title: "Мужские Кроссовки Nike Blazer Suede",
      price: 8499,
      imageUrl: "/img/sneakers/3.jpg",
   },
   {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      imageUrl: "/img/sneakers/4.jpg",
   },
];

function App() {
   return (
      <div className="wrapper clear">
         <Drawer />
         <Header />
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
            <div className="d-flex">
               {arr.map(({ imageUrl, price, title }, index) => (
                  <Card imageUrl={imageUrl} price={price} title={title} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
