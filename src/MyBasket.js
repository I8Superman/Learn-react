export default function MyBasket(props) {
    //console.log(props.basket);
    return (
        <section className="MyBasket">
            <p>You have {props.basket.length} items basking in your basket, totalling 0 DKK</p>
        </section>
    )
}