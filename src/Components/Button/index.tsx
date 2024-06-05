import styled from 'styled-components';

interface Props {
  readonly label: string;
}

export const Button = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div``;

const Label = styled.div``;
