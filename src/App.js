
import './App.css';

import { useState } from "react";

import Navigation from "./Navigation.js";
import ProductList from "./ProductList.js";
import Basket from "./Basket.js";

function App() {

  // const product = {
  //   id: 1163,
  //   displayname: "Turtle topsy",
  //   price: 376,
  //   soldOut: 1,
  //   description: "Wanna look AND date like a turtle? GET. THIS. T-NECK."
  // }

  const [products, updateProducts] = useState([
    {
      id: 1163,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Summer",
      productionyear: 2011,
      usagetype: "Sports",
      productdisplayname: "Sahara Team India Fanwear Round Neck Jersey",
      price: 895,
      discount: null,
      brandname: "Nike",
      soldout: 0,
    },
    {
      id: 1164,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Winter",
      productionyear: 2015,
      usagetype: "Sports",
      productdisplayname: "Blue T20 Indian Cricket Jersey",
      price: 1595,
      discount: 28,
      brandname: "Nike",
      soldout: 1,
    },
    {
      id: 1165,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Summer",
      productionyear: 2013,
      usagetype: "Sports",
      productdisplayname: "Mean Team India Cricket Jersey",
      price: 2495,
      discount: 45,
      brandname: "Nike",
      soldout: 0,
    },
    {
      id: 1525,
      gender: "Unisex",
      category: "Accessories",
      subcategory: "Bags",
      articletype: "Backpacks",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Deck Navy Blue Backpack",
      price: 1299,
      discount: 55,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1526,
      gender: "Unisex",
      category: "Accessories",
      subcategory: "Bags",
      articletype: "Backpacks",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Big Cat Backpack Black",
      price: 1299,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1528,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Jackets",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Black Fleece Jacket",
      price: 3999,
      discount: 49,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1529,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Tee",
      price: 1899,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1530,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Jackets",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Track Jacket",
      price: 4299,
      discount: 57,
      brandname: "Puma",
      soldout: 1,
    },
    {
      id: 1531,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Grey Solid Round Neck T-Shirt",
      price: 799,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1532,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Grey Leaping Cat T-shirt",
      price: 899,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
  ]);


  const addProduct = () => {
    updateProducts((prevList) =>
      prevList.concat({
        id: 1234,
        gender: "Lesbimens",
        category: "Towels",
        subcategory: "TopNotch!",
        articletype: "Crothc-wear",
        season: "Xmas eve",
        productionyear: 1817,
        usagetype: "Sexy",
        productdisplayname: "XmasHoseLeather",
        price: 30000,
        discount: 0,
        brandname: "Mikee",
        soldout: 1,
      })
    );
  };

  const [basket, updateBasket] = useState([{
    id: 1234,
    gender: "Lesbimens",
    category: "Towels",
    subcategory: "TopNotch!",
    articletype: "Crothc-wear",
    season: "Xmas eve",
    productionyear: 1817,
    usagetype: "Sexy",
    productdisplayname: "XmasHoseLeather",
    price: 30000,
    discount: 0,
    brandname: "Mikee",
    soldout: 1,
  }]);
  const handleAddToBasket = (payload, e) => {
    // console.log(payload);
    // console.log(e);
    updateBasket((prevBasket) => [...prevBasket, payload]);
  };

  return (
    <div className="App">
      <Navigation />
      <ProductList products={products} onAddToBasket={handleAddToBasket} />
      <Basket basket={basket} />
      <button onClick={addProduct}>Add crazy product</button>
    </div>
  );
}

export default App;
