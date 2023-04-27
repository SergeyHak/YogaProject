import styled from "styled-components";
import AppRoutes from "./routs/routs";

function App() {
  const Wrapper = styled.div`
    min-height: 100%;
    overflow: hidden;
  `;

  return (
    <Wrapper>
      <AppRoutes />
     </Wrapper>
  );
}

export default App;
