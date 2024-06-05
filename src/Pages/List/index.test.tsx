/*
  <List 페이지 컴포넌트 사양>
  1. 할 일 목록을 보여준다. (할 일 목록은 localStorage에 저장되어 있다.)
  2. 할 일 목록은 할 일 뿐만 아니라 해당 할 일을 삭제할 수 있는 삭제 버튼을 가지고 있다.
  3. 각각의 할 일 목록을 클릭하면 할 일 상세페이지('/detail/:id')로 이동한다.
  4. 추가 버튼('+')을 가지고 있다.
  5. 추가 버튼을 누르면 할 일 추가 페이지('/add')로 이동한다.
*/

import { render, screen } from '@testing-library/react';

describe('<List />', () => {
  it('renders component correctly', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(<List />);

    const toDoItem1 = screen.getByText('ToDo 1');
    expect(toDoItem1).toBeInTheDocument();

    const toDoItem2 = screen.getByText('ToDo 2');
    expect(toDoItem2).toBeInTheDocument();

    const toDoItem3 = screen.getByText('ToDo 3');
    expect(toDoItem3).toBeInTheDocument();
  });
});
