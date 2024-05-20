import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductsList = ({ products, onClick }) => {
  return (
    <div className="flex flex-col">
      <Link to="/cart">go to cart</Link>
      <div className="grid grid-cols-1 place-items-center gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
