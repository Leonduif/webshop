import styled from "@emotion/styled";
import { Item } from "../pages/Store";
import ProductItem from "./ProductItem";

type ProductListProps = {
  items: Item[];
};

function ProductList({ items }: ProductListProps) {
  const allItems = items.map((item) => <ProductItem key={item.id} {...item} />);
  return <Container>{allItems}</Container>;
}

const Container = styled.ul`
  display: flex;
`;

export default ProductList;
