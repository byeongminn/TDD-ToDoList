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
  padding: 0.625rem 1.25rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? '#304ffe'};
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) =>
      $hoverBackgroundColor ?? '#1e40ff'};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: #ffffff;
`;
