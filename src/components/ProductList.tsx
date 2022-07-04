import styled from "@emotion/styled";
import { Item } from "../pages/Store";
import { media } from "../style/theme";
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
  flex-direction: column;
  gap: 1.5rem;

  ${media.mobile} {
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ProductList;
