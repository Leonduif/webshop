import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Button>hi there</Button>
    </>
  );
}

export default App;
