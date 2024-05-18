import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 place-items-center p-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
