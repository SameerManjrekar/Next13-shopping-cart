"use client";

import CartItemCard from "@/components/CartItemCard";
import { totalPriceSelector } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(totalPriceSelector);
  return (
    <>
      <div className="p-2">
        {cartItems?.map((item: any, index: number) => (
          <CartItemCard key={index} cartItem={item} />
        ))}

        <p className="text-slate-600 mt-6">
          Total Price:{" "}
          <span className="text-slate-900 font-bold">$ {totalPrice}</span>
        </p>
      </div>
    </>
  );
};

export default CartPage;
