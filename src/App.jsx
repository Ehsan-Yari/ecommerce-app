import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const findProductId = (productId) => {
    return cart.findIndex((item) => item.id === productId);
  };

  const findProduct = (productId) => {
    return cart.find(( item ) => item.id === productId);
  };

  const handleAddToCart = (item) => {
    if (findProductId(item?.id) === -1) {
      setCart((prevState) => [...prevState, { ...item, quantity: 1 }]);
    } else {
      const selectedProduct = findProduct(item?.id);
      const newProduct = {
        ...selectedProduct,
        quantity: (selectedProduct.quantity += 1),
      };
      const newCart = cart.filter(( item ) => item.id !== newProduct.id);
      setCart([...newCart, newProduct]);
    }
  };


  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (hasError) {
    return <Alert message="Something went wrong!" />;
  }

  return (
    <div>
      <ProductsList products={products} onClick={handleAddToCart} />
    </div>
  );
};

export default App;
