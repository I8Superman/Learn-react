export default function Product(props) {
    console.log(props);
    // const clicked = (btn) => {
    //     console.log(`You selected the ${props.displayname}`);
    // }
    return (
        <div className="Product">
            <img src="https://picsum.photos/300/300" alt={props.displayname}></img>
            <h2>{props.displayname}</h2>
            <div className="ProductDescription">{props.description}</div>
            <div className="Price">{props.price} DOLLARS</div>
        </div>
    )
}
//<button className="more_info" onClick={clicked}></button>