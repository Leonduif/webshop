import styled from "@emotion/styled";
import Wrap from "./Wrap";

type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
};

function Header({ children }: HeaderProps) {
  return (
    <Head>
      <Wrapper>{children}</Wrapper>
    </Head>
  );
}

const Wrapper = styled(Wrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Head = styled.header`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export default Header;
