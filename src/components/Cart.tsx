import styled from "@emotion/styled";
import { useCart } from "../context/CartProvider";
import { COLORS } from "../style/theme";

function Cart() {
  const { getTotalItemQuantity } = useCart();
  return (
    <Container>
      <span className="material-symbols-outlined">shopping_cart</span>
      {getTotalItemQuantity() > 0 && <Total>{getTotalItemQuantity()}</Total>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${COLORS.primary};
  border-radius: 4px;
  position: relative;

  .material-symbols-outlined {
    font-size: 30px;
  }
`;

const Total = styled.span`
  position: absolute;
  font-size: 20px;
  bottom: -10px;
  right: -10px;
  width: 1.75rem;
  height: 1.75rem;
  background-color: white;
  text-align: center;
  border: 2px solid ${COLORS.primary};
  border-radius: 100%;
  color: black;
  font-size: 16px;
  line-height: 1.5rem;
`;

export default Cart;
