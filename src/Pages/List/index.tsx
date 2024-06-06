import { Button } from 'Components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = () => {
  const [toDoList, setToDoList] = useState<string[]>([]);

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');

    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  const onDelete = (index: number) => {
    const list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
    localStorage.setItem('ToDoList', JSON.stringify(list));
  };

  return (
    <Container>
      <ToDoList>
        {toDoList.map((toDo, index) => (
          <ToDoItem key={toDo}>
            <Label to={`/detail/${index}`}>{toDo}</Label>
            <Button
              label="삭제"
              backgroundColor="#ff1744"
              hoverBackgroundColor="#f01440"
              onClick={() => onDelete(index)}
            />
          </ToDoItem>
        ))}
      </ToDoList>
      <AddButton to="/add">+</AddButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ToDoList = styled.div`
  margin-bottom: 1.25rem;
  min-width: 21.875rem;
  height: 25rem;
  border: 1px solid #bdbdbd;
  overflow-y: scroll;
`;

const ToDoItem = styled.div`
  margin: 0.625rem;
  padding: 0.625rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

const Label = styled(Link)`
  margin-right: 1.5rem;
  flex: 1;
  font-size: 1rem;
  text-decoration: none;
`;

const AddButton = styled(Link)`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -1.875rem;
  background-color: #304ffe;
  border-radius: 1.875rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #1e40ff;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
