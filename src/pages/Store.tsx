import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import Title from "../components/Title";
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
      <Title>Store</Title>
      <ProductList items={items} />
    </>
  );
}

export default Store;
