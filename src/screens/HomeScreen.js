import products from "../data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";


//Map function allows me to manipulate and access the items in the data array
const HomeScreen = () => {
  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;