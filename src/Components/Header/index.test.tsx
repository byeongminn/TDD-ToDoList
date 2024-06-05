/*
  <Header 컴포넌트 사양>
  1. 페이지의 제목을 표시한다.
  2. 주어진 URL에 해당하는 페이지 제목을 표시한다. ('/': 할 일 목록, '/add': 할 일 추가, '/detail/:id': 할 일 상세, 기타 URL: 에러)
  3. 할 일 목록 페이지('/') 이외에 페이지에서는 돌아가기 링크를 표시한다.
  4. 돌아가기 링크의 URL은 홈 URL('/')이다.
  5. 돌아가기 링크를 클릭하면 홈 URL로 이동한다.
*/

import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('<Header />', () => {
  it('renders component correctly', () => {
    render(<Header />);

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
  });
});
