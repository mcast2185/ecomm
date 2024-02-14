'use client'

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { productCart } from "@/app/interface";
import { urlFor } from "@/app/lib/sanity";


const AddToBag = ({ currency, description, image, name, price, price_id }: productCart) => {
  const {addItem, handleCartClick} = useShoppingCart();

  const product = {
    name: name,
    description: description,
    image: urlFor(image).url(),
    currency: currency,
    price: price,
    price_id: price_id
  };

  return (
    <Button className=""
      onClick={() => {
        addItem(product), handleCartClick()}}>
      Add To Cart
    </Button>
  );
};

export default AddToBag;