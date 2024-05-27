import { useContext, useState,useEffect} from "react";
import axios from 'axios';
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {
    const { food_list, cartItems, getTotalCartAmount,url,token} = useContext(StoreContext);
    const navigate=useNavigate();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "", 
        country: "",
        phone: "",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();

        let orderItems=[];
        food_list.map((item)=>{
            if(cartItems[item._id]>0){
                let itemInfo=item;
                itemInfo["quantity"]=cartItems[item._id];
                orderItems.push(itemInfo);
            }
        });
        console.log(orderItems);

        let orderData={
            address:data,
            items:orderItems,
            amount:getTotalCartAmount()+2,
        };

        try {
            let response = await axios.post(url+"/api/orders/place", orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            } else {
                alert("Error");
            }
        } catch (error) {
            console.error('An error occurred:', error.response.data);
        }        
    };
    useEffect(()=>{
        if(!token){
            navigate("/cart");
        }
        else if(getTotalCartAmount()===0){
            navigate("/cart");
        }
    },[token]);
   
    return (
        <form onSubmit={placeOrder} className="place-order">    
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" required name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First name"/>
                    <input type="text" required name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last name"/>
                </div>
                <input type="text" required name="email" onChange={onChangeHandler} value={data.email} placeholder="Email address" />
                <input type="text" required name="street" onChange={onChangeHandler} value={data.street} placeholder="Street"/>
                <div className="multi-fields">
                    <input type="text" required name="city" onChange={onChangeHandler} value={data.city} placeholder="City"/>
                    <input type="text" required name="state" onChange={onChangeHandler} value={data.state} placeholder="State"/>
                </div>
                <div className="multi-fields">
                    <input type="text" required name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Zip Code"/>
                    <input type="text" required name="country" onChange={onChangeHandler} value={data.country} placeholder="Country"/>
                </div>
                <input type="text" required name="phone" onChange={onChangeHandler} value={data.phone} placeholder="Phone"/>
            </div>
            <div className="place-order-right">
                       <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <p>DeliveryFee</p>
                        <p>$2</p>
                    </div>
                    <hr/>
                    <div classNasme="cart-total-details">
                        <p>Total</p>
                        <p>${getTotalCartAmount() + 2}</p>
                    </div>
                </div>
                <hr/>
                <br/>
                <button type="submit" className="butn">Proceed to Payment</button>
            </div>
        </form>
    );
}

export default PlaceOrder;
