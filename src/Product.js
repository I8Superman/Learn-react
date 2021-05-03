export default function Product(props) {
    return (
        <div className="Product">
            <img src="https://picsum.photos/300/300" alt={props.productdisplayname}></img>
            <h2>{props.displayname}</h2>
            <div className="ProductDescription">{props.description}</div>
            <div className="Price">{props.price} DOLLARS</div>
        </div>
    )
}