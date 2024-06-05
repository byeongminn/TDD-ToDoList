import styled from 'styled-components';

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverBackgroundColor?: string;
  readonly onClick?: () => void;
}

export const Button = ({
  label,
  backgroundColor = '#304ffe',
  hoverBackgroundColor = '#1e40ff',
  onClick,
}: Props) => {
  return (
    <Container
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
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
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.div``;
