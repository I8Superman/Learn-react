
import './App.css';

import Navigation from "./Navigation.js";
import ProductList from "./ProductList.js";
import Basket from "./Basket.js";

function App() {
  const product = {
    id: 1163,
    displayname: "Turtle topsy",
    price: 376,
    soldOut: 0,
    description: "Wanna look AND date like a turtle? GET. THIS. T-NECK."
  }
  let basket = ["hey", "how", "many", "items"];

  return (
    <div className="App">
      <Navigation />
      <ProductList product={product} />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
