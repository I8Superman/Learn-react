export default function MyBasket({ basket }) {
    console.log(basket);
    return (
        <section className="MyBasket">
            <p>You have {basket.length} items basking in your basket, totalling 0 DKK</p>
            <ul>
                {basket.map((item) => (
                    <BasketItem name={item.productdisplayname} key={item.id} />
                ))}
            </ul>
        </section>
    )
}

function BasketItem(props) {
    return (
        <li>
            {props.name}
        </li>
    );
}