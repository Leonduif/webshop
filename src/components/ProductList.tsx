import styled from "@emotion/styled";
import { media } from "../style/theme";
import ProductItem from "./ProductItem";

export type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type ProductListProps = {
  items: ProductItemProps[];
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
