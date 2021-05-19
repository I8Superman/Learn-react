import { useState } from "react";

export default function Product(props) {
    // console.log(props);
    // console.log(props.addToBasket);
    // const clicked = (btn) => {
    //     console.log(btn);
    //     console.log(`You selected the ${props.id}`);
    // }
    const initial = 0;
    const [amount, setAmount] = useState(initial);
    const addOne = () => {
        setAmount((prevAmount) => prevAmount + 1); // This argument (a function) gets passed to the relevant useStates' 'value' (?) 
    }
    const subtractOne = () => {
        setAmount((prevAmount) => prevAmount - 1);
    }
    // const onClickAddToBasket = () => {
    //     props.onAddToBasket(props);
    // };


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
            <button onClick={(e) => { props.onAddToBasket(props, e) }}>Add to basket</button>
        </article>
    )
}
//<button className="more_info" onClick={(e) => clicked('hello')}>More info</button >