import { Product } from "@/interfaces";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  return (
    <div className="border shadow rounded-md hover:shadow-lg transition overflow-hidden">
      <Image
        src={props.product.imagePath}
        width={400}
        height={300}
        alt={props.product.name}
      />
      <div className="p-2">
        <h6 className="text-center text-slate-600">{props.product.name}</h6>
        <p className="text-center text-slate-600">$ {props.product.price}</p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;
