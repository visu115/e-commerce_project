import React from "react"
import TopCate from "../component/top/TopCate"
import NewArrivals from "../component/newarrivals/NewArrivals"
import Discount from "../component/discount/Discount"
import Shop from "../component/shops/Shop"
import Annocument from "../component/annocument/Annocument"
import Wrapper from "../component/wrapper/Wrapper"
import FlashDeals from "../component/flashdeals/FlashDeal"
import Home from "../component/mainpage/Home"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages