import styled from "@emotion/styled";
import { useCart } from "../context/CartProvider";
import convertToCurrency from "../utilities/convertToCurrency";
import Button from "./Button";

type ProductItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function ProductItem({ id, name, price, imgUrl }: ProductItemsProps) {
  const quantity = 1;
  const { addQuantity, removeQuantity } = useCart();

  const handleReduceQuantityClick = () => {
    removeQuantity(id);
  };

  const handleAddQuantityClick = () => {
    addQuantity(id);
  };
  return (
    <Li>
      <ImgWrapper>
        <Img src={imgUrl} alt={name} />
        <Price>{convertToCurrency(price)}</Price>
      </ImgWrapper>
      <ContentWrapper>
        <Name>{name}</Name>
        <ButtonWrapper>
          {quantity > 0 && (
            <>
              <Button square onClick={handleReduceQuantityClick}>
                <span className="material-symbols-outlined">remove</span>
              </Button>
              <TextInput type="text" />
            </>
          )}
          <Button square quantity={quantity} onClick={handleAddQuantityClick}>
            <span className="material-symbols-outlined">add</span>
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Li>
  );
}

const TextInput = styled.input`
  width: 3rem;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Name = styled.span`
  display: block;
  font-size: 20px;
  text-align: center;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0 0 4px 4px;
`;

const Li = styled.li`
  flex: 1 0 auto;
`;

const ImgWrapper = styled.div`
  display: block;
  position: relative;
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 4px 4px 0 0;
`;

const Price = styled.span`
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.3rem;
  border-radius: 2px;
`;

export default ProductItem;
