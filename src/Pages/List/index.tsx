import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const List = () => {
  const [toDoList, setToDoList] = useState<string[]>([]);

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');

    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  return (
    <Container>
      {toDoList.map((toDo) => (
        <ToDoItem key={toDo}>{toDo}</ToDoItem>
      ))}
    </Container>
  );
};

const Container = styled.div``;

const ToDoItem = styled.div``;
