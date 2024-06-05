/*
  <Button 컴포넌트 사양>
  1. 공통 컴포넌트이므로 부모 컴포넌트에서 버튼의 라벨을 결정할 수 있다.
  2. 기본적으로 파란색 계열의 배경색(#304ffe)과 마우스 호버 색상(#1e40ff)이 화면에 표시된다. 하지만, 필요하면 배경색과 마우스 호버 색상을 부모 컴포넌트에서 변경할 수 있다.
  3. 버튼을 누르고 있으면 버튼 안쪽에 box-shadow를 표시한다. (box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2))
  4. 버튼을 클릭할 수 있으며, 클릭하였을 때 동작은 부모 컴포넌트가 결정한다.
*/

import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';
import 'jest-styled-components';

describe('<Button />', () => {
  it('renders component correctly', () => {
    render(<Button label="추가" />);

    const label = screen.getByText('추가');
    expect(label).toBeInTheDocument();

    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304ffe');
    expect(parent).toHaveStyleRule('background-color', '#1e40ff', {
      modifier: ':hover',
    });
    expect(parent).toHaveStyleRule(
      'box-shadow',
      'inset 5px 5px 10px rgba(0, 0, 0, 0.2)',
      {
        modifier: ':active',
      },
    );
  });

  it('changes backgroundColor and hoverBackgroundColor Props', () => {
    const backgroundColor = '#ff1744';
    const hoverBackgroundColor = '#f01440';

    render(
      <Button
        label="추가"
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
      />,
    );

    const parent = screen.getByText('추가').parentElement;
    expect(parent).toHaveStyleRule('background-color', backgroundColor);
    expect(parent).toHaveStyleRule('background-color', hoverBackgroundColor, {
      modifier: ':hover',
    });
  });

  it('clicks the button', () => {
    const handleClick = jest.fn();
    render(<Button label="추가" onClick={handleClick} />);

    const label = screen.getByText('추가');
    expect(handleClick).toHaveBeenCalledTimes(0);

    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
