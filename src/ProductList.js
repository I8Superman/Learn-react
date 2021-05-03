import Product from "./Product.js"

export default function ProductList(props) {
    return (
        <main className="ProductList">
            <Product {...props} />
            <Product name="Glasses" />
            <Product name="Boots" />
            <Product name="Crap" />
            <Product name="Stuff" />
            <Product name="The Shit" />
        </main>
    )
}