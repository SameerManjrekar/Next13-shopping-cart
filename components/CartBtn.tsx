"use client";

import { totalCartItemsSelector } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

type Props = {
  className?: string;
};

const CartBtn = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className} relative`}>
      <ShoppingCartIcon className="w-8 text-slate-600" />
      {!!totalItems && (
        <div
          key={totalItems}
          className="bg-red-500 flex justify-center items-center rounded-full w-6 absolute -top-2 -right-2 text-white animate-pingOnce"
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CartBtn;
