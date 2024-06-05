import styled from 'styled-components';

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverBackgroundColor?: string;
}

export const Button = ({
  label,
  backgroundColor = '#304ffe',
  hoverBackgroundColor = '#1e40ff',
}: Props) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
    >
      <Label>{label}</Label>
    </Container>
  );
};

interface ContainerProps {
  readonly $backgroundColor: string;
  readonly $hoverBackgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? '#304ffe'};

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) =>
      $hoverBackgroundColor ?? '#1e40ff'};
  }
`;

const Label = styled.div``;
