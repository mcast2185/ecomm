'use client'

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { productCart } from "@/app/interface";
import { urlFor } from "@/app/lib/sanity";


const CheckoutNow = ({ currency, description, image, name, price, price_id }: productCart) => {
  const { checkoutSingleItem } = useShoppingCart();
  const purchase = (priceId: string) => {
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    image: urlFor(image).url(),
    currency: currency,
    price: price,
    price_id: price_id
  };

  return (
    <Button 
      onClick={() => {
        purchase(product.price_id)
      }}>
      Proceed To Checkout
    </Button>
  );
};

export default CheckoutNow;