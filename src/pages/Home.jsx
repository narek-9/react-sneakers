import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div
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
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              width={15}
              height={15}
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
