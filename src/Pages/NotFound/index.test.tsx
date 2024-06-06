/*
  <NotFound 페이지 컴포넌트 사양>
  1. 화면에 "Not Found"라는 글자를 표시한다.
*/

import { render, screen } from '@testing-library/react';
import { NotFound } from '.';

describe('<NotFound />', () => {
  it('renders component correctly', () => {
    const { container } = render(<NotFound />);

    const message = screen.getByText('Not Found');
    expect(message).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
