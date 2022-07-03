import styled from "@emotion/styled";

type ProductItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function ProductItem({ id, name, price, imgUrl }: ProductItemsProps) {
  return (
    <li>
      <div>
        <ImgWrapper>
          <Img src={imgUrl} alt={name} />
          <Price>{price}</Price>
        </ImgWrapper>
        <div>
          <span>{name}</span>
          <div>
            <button>-</button>
            <input type="text" />
            <button>+</button>
          </div>
        </div>
      </div>
    </li>
  );
}

const ImgWrapper = styled.div`
  display: block;
  height: 10rem;
  position: relative;
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
`;

const Price = styled.span`
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 18px;
  background-color: white;
  color: black;
`;

export default ProductItem;
