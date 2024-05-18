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

  const findProductIndex = (productId) => cart.findIndex((item) => item.id === productId);

  const handleAddToCart = (item) => {
    setCart((prevState) => {
      const productIndex = findProductIndex(item?.id);

      if (productIndex === -1) {
        return [...prevState, { ...item, quantity: 1 }];
      } else {
        const newCart = [...prevState];
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: newCart[productIndex].quantity + 1
        };
        return newCart;
      }
    });
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
