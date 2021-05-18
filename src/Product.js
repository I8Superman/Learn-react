import { useState } from "react";

export default function Product(props) {
    //console.log(props);
    // const clicked = (btn) => {
    //     console.log(btn);
    //     console.log(`You selected the ${props.id}`);
    // }
    const initial = 0;
    const [amount, setAmount] = useState(initial);
    const addOne = () => {
        setAmount((prevAmount) => prevAmount + 1);
    }
    const subtractOne = () => {
        setAmount((prevAmount) => prevAmount - 1);
    }

    return (
        <article className={props.soldOut ? "Product soldOut" : "Product"}>
            <img src="https://picsum.photos/300/300" alt={props.productdisplayname}></img>
            <h2>{props.productdisplayname}</h2>
            <div className="ProductDescription">{props.description}</div>
            <div className="Price">{props.price} DOLLARS</div>
            <div className="Brandname">Brand: {props.brandname}</div>
            <div className="Gender">Designed for {props.gender}</div>
            <button disabled={amount === 0} onClick={subtractOne}>-</button>
            <h3>{amount}</h3>
            <button onClick={addOne}>+</button>
        </article>
    )
}
//<button className="more_info" onClick={(e) => clicked('hello')}>More info</button >