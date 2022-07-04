import ProductList from "../components/ProductList";
import Title from "../components/Title";
import items from "./../data/items.json";

function Store() {
  return (
    <>
      <Title>Store</Title>
      <ProductList items={items} />
    </>
  );
}

export default Store;
