import { Button } from 'Components';
import styled from 'styled-components';

export const Add = () => {
  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요." />
      <Button label="추가" />
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.input``;
