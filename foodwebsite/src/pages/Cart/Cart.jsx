import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Cart.css';
import { useNavigate } from "react-router-dom";
import LoginPopup from "../../components/LoginPopup/LoginPopup.jsx";

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext);
    const navigate = useNavigate();

    if (!token) {
        return <LoginPopup/>
    }

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id} className="cart-items-title cart-items-item">
                                <img src={url + "/images/" + item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>{item.price * cartItems[item._id]}</p>
                                <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                            </div>
                        );
                    }
                })}
                <br />
                <hr />
            </div>
            <div className="cart-bottom">
                <h2>Cart Totals</h2>
                <div className="cart-total">
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>DeliveryFee</p>
                        <p>${2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${getTotalCartAmount() + 2}</p>
                    </div>
                </div>
                <hr />
                <button onClick={() => navigate('/order')} className="butn">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
