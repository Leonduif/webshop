import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.accentColor};
`;

function Home() {
  return (
    <>
      <h1>This is the homepage</h1>
      <Button>Hello</Button>
    </>
  );
}

export default Home;
