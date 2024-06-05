/*
  <List 페이지 컴포넌트 사양>
  1. 할 일 목록을 보여준다. (할 일 목록은 localStorage에 저장되어 있다.)
  2. 할 일 목록은 할 일 뿐만 아니라 해당 할 일을 삭제할 수 있는 삭제 버튼을 가지고 있다.
  3. 각각의 할 일 목록을 클릭하면 할 일 상세페이지('/detail/:id')로 이동한다.
  4. 추가 버튼('+')을 가지고 있다.
  5. 추가 버튼을 누르면 할 일 추가 페이지('/add')로 이동한다.
*/

import { fireEvent, render, screen } from '@testing-library/react';
import { List } from '.';
import { MemoryRouter, useLocation } from 'react-router-dom';

describe('<List />', () => {
  it('renders component correctly', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <MemoryRouter initialEntries={['/']}>
        <List />
      </MemoryRouter>,
    );

    const toDoItem1 = screen.getByText('ToDo 1');
    expect(toDoItem1).toBeInTheDocument();

    const toDoItem2 = screen.getByText('ToDo 2');
    expect(toDoItem2).toBeInTheDocument();

    const toDoItem3 = screen.getByText('ToDo 3');
    expect(toDoItem3).toBeInTheDocument();

    expect(screen.getAllByText('삭제').length).toBe(3);
  });

  it('deletes toDo item', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <MemoryRouter initialEntries={['/']}>
        <List />
      </MemoryRouter>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();

    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);

    expect(toDoItem).not.toBeInTheDocument();
    expect(
      JSON.parse(localStorage.getItem('ToDoList') as string),
    ).not.toContain('ToDo 2');
  });

  it('moves to detail page', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const TestComponent = () => {
      const { pathname } = useLocation();

      return <div>{pathname}</div>;
    };

    render(
      <MemoryRouter>
        <TestComponent />
        <List />
      </MemoryRouter>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem.getAttribute('href')).toBe('/detail/1');

    fireEvent.click(toDoItem);
    expect(url.textContent).toBe('/detail/1');
  });
});
