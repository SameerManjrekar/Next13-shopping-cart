"use client";
import {
  decrement,
  increment,
  productQtySelector,
} from "@/store/features/cartSlice";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { Product } from "../interfaces";
import { Button } from "./elements/Button";
import QtyBtn from "./QtyBtn";

type Props = {
  product: Product;
};

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtySelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty) {
    return (
      <div className="flex justify-center">
        <Button onClick={() => dispatch(increment(props.product))}>
          Add To cart
        </Button>
      </div>
    );
  }
  return (
    <QtyBtn
      onIncrement={() => dispatch(increment(props.product))}
      onDecrement={() => dispatch(decrement(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
