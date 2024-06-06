import { Header } from 'Components';
import { Add, Detail, List, NotFound } from 'Pages';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
