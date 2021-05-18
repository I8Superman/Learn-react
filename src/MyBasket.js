export default function MyBasket(props) {
    //console.log(props);
    return (
        <section className="MyBasket">
            <p>We got {props.basket[0]}</p>
            <p>You have {props.basket.length} items basking in your basket, totalling 0 DKK</p>
        </section>
    )
}