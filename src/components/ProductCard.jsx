import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      title={product?.title}
      className="flex h-full flex-col gap-y-4 overflow-hidden rounded-lg p-4 shadow-lg shadow-cyan-800/10 transition-all duration-200"
    >
      <img
        src={product?.image}
        alt={product?.title}
        className="aspect-square object-contain"
      />
      <h3 className="line-clamp-1 text-center text-lg font-semibold text-indigo-900">
        {product?.title}
      </h3>
      <p className="border-t border-dashed border-gray-500 pt-3 font-semibold">
        Description:
      </p>
      <p title={product?.description} className="line-clamp-4 text-justify">
        {product?.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium text-gray-500">{product?.price}$</span>
        <FaCartPlus
          onClick={() => {
            onClick(product);
          }}
          className="cursor-pointer transition-all duration-200 hover:opacity-70"
          size={28}
          title="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;
