import Product from "./Product.js"

export default function ProductList(props) {
    console.log(props)
    return (
        <main className="ProductList">
            <Product {...props.product} />
            <Product name="Glasses" />
            <Product name="Boots" />
            <Product name="Crap" />
            <Product name="Stuff" />
            <Product name="The Shit" />
        </main>
    )
}