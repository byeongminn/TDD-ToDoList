/* 
  <Detail 페이지 컴포넌트 사양>
  1. URL을 통해 할 일 목록에서 유저가 클릭한 할 일의 index 값을 전달받는다. (ex > /detail/2);
  2. URL을 통해 전달받은 index를 사용하여 localStorage에 저장된 할 일 목록에서 해당 할 일을 가져와 표시한다.
  3. 전달받은 매개변수에 해당하는 할 일이 없는 경우 NotFound 페이지('/404')로 리다이렉트(Redirect) 시킨다.
  4. 현재 보이는 할 일을 삭제할 수 있는 삭제 버튼이 있다.
  5. 삭제 버튼을 클릭하면 현재 보이는 할 일을 삭제하고, 할 일 목록 페이지('/')로 이동한다.
*/

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Detail } from '.';

describe('<Detail />', () => {
  it('renders component correctly', () => {
    localStorage.setItem('ToDoList', '["ToDo 1","ToDo 2"]');

    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MemoryRouter>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();
  });

  it('redirect to Not Found Page if todo id is wrong', () => {
    localStorage.clear();

    const TestComponent = () => {
      const { pathname } = useLocation();

      return <div>{pathname}</div>;
    };

    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <TestComponent />
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/404" element={<div>Not Found</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const url = screen.getByText('/404');
    expect(url).toBeInTheDocument();
  });
});
