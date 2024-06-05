import { Header } from 'Components';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
`;
