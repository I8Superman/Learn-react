import Product from "./Product.js";

export default function ProductList(props) {
    //console.log(props)
    const allProducts = props.products.map((product) => (
        <Product key={product.id} {...product} />)
    );

    return (
        <main className="ProductList">
            {allProducts}
        </main>
    )
}