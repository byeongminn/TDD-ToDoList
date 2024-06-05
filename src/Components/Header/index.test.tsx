/*
  <Header 컴포넌트 사양>
  1. 페이지의 제목을 표시한다.
  2. 주어진 URL에 해당하는 페이지 제목을 표시한다. ('/': 할 일 목록, '/add': 할 일 추가, '/detail/:id': 할 일 상세, 기타 URL: 에러)
  3. 할 일 목록 페이지('/') 이외에 페이지에서는 돌아가기 링크를 표시한다.
  4. 돌아가기 링크의 URL은 홈 URL('/')이다.
  5. 돌아가기 링크를 클릭하면 홈 URL로 이동한다.
*/

import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '.';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  it('renders component correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();

    const goBack = screen.queryByText('돌아가기');
    expect(goBack).not.toBeInTheDocument();
  });

  it('renders component correctly with /add URL', () => {
    render(
      <MemoryRouter initialEntries={['/add']}>
        <Header />
      </MemoryRouter>,
    );

    const label = screen.getByText('할 일 추가');
    expect(label).toBeInTheDocument();

    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });

  it('renders component correctly with /detail/:id URL', () => {
    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <Header />
      </MemoryRouter>,
    );

    const label = screen.getByText('할 일 상세');
    expect(label).toBeInTheDocument();

    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });

  it('renders component correctly with NotFound', () => {
    render(
      <MemoryRouter initialEntries={['/not_found']}>
        <Header />
      </MemoryRouter>,
    );

    const label = screen.getByText('에러');
    expect(label).toBeInTheDocument();

    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });

  it('renders component correctly with goBack link', () => {
    render(
      <MemoryRouter initialEntries={['/not_found']}>
        <Header />
      </MemoryRouter>,
    );

    const goBack = screen.getByText('돌아가기');
    fireEvent.click(goBack);

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
    expect(goBack).not.toBeInTheDocument();
  });
});
