import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Detail = () => {
  const { id } = useParams();
  const toDoList = JSON.parse(localStorage.getItem('ToDoList') || '[]');
  const toDo = toDoList[id || ''];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
    </Container>
  );
};

const Container = styled.div``;

const ToDo = styled.div``;
