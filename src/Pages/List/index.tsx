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

const Container = styled.div``;

const ToDoList = styled.div``;

const ToDoItem = styled.div``;

const Label = styled(Link)``;

const AddButton = styled(Link)``;
