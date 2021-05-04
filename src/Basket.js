
import MyBasket from "./MyBasket.js";
import CheckoutForm from "./CheckoutForm.js";

export default function Basket(props) {
    //console.log(props.basket);
    return (
        <div className="Basket">
            <MyBasket {...props} />
            <CheckoutForm />
        </div>
    )
}