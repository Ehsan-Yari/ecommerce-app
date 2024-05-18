import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

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
      <ProductsList products={products} />
    </div>
  );
};

export default App;
