export default function Product(props) {
    console.log(props.soldOut);
    // const clicked = (btn) => {
    //     console.log(`You selected the ${props.displayname}`);
    // }
    return (
        <article className={props.soldOut ? "Product soldOut" : "Product"}>
            <img src="https://picsum.photos/300/300" alt={props.displayname}></img>
            <h2>{props.displayname}</h2>
            <div className="ProductDescription">{props.description}</div>
            <div className="Price">{props.price} DOLLARS</div>
        </article>
    )
}
//<button className="more_info" onClick={clicked}></button>