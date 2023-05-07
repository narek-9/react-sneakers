import { useContext, useState } from "react";
import AppContext from "../context";
import axios from "axios";
import Info from "./info";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Drawer({ onRemove, onClose, items = [] }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://643bc0b844779455735ff7f1.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(data.id);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://643bc0b844779455735ff7f1.mockapi.io/cart" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            width={15}
            height={15}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => {
                return (
                  <div
                    key={obj.id}
                    className="cartItem d-flex align-center mb-20"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${obj.imageUrl})`,
                      }}
                      className="cartItemImg"
                    ></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб․</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
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
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ
                <img width={25} height={25} src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.png"
                : "/img/empty-cart.png"
            }
          />
        )}
      </div>
    </div>
  );
}
