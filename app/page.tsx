"use client";

import FeaturedProducts from "./Components/FeaturedProducts";
import HeaderSlider from "./Components/HeaderSlider";
import Newsletter from "./Components/NewsLetter";
import Productscart from "./Components/Productscart";

export default function Home() {
  return (
    <main>
      <HeaderSlider />
      <Productscart />
      <FeaturedProducts />
      <Newsletter />
    </main>
  );
}
