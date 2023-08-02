import { styled } from "styled-components";
import Login from "./Pages/Login/Login";

const Container = styled.div`
  
  width:400px;
  border:1px solid #ccc;
  height:90%;
  border-radius:8px;
  @media(max-width:376px){
    height:100%;
    width:100%;
    border:0;
  }
`;

function App() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;
