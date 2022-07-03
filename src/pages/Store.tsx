import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import items from "./../data/items.json";

export type Item = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function Store() {
  return (
    <>
      <h1>Store</h1>
      <ProductList items={items} />
    </>
  );
}

export default Store;
