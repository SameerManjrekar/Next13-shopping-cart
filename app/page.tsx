import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces";

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Surface",
    price: 1200,
    imagePath: "https://picsum.photos/id/52/400/300",
  },
  {
    id: 2,
    name: "Macbook Air",
    price: 999,
    imagePath: "https://picsum.photos/id/12/400/300",
  },
  {
    id: 3,
    name: "Cell Phone",
    price: 800,
    imagePath: "https://picsum.photos/id/36/400/300",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 50,
    imagePath: "https://picsum.photos/id/84/400/300",
  },
  {
    id: 5,
    name: "Mouse",
    price: 10,
    imagePath: "https://picsum.photos/id/11/400/300",
  },
  {
    id: 6,
    name: "Printer",
    price: 300,
    imagePath: "https://picsum.photos/id/41/400/300",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        {dummyProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
