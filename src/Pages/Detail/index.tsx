import { Button } from 'Components';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const toDoList = JSON.parse(localStorage.getItem('ToDoList') || '[]');
  const toDo = toDoList[id || ''];

  useEffect(() => {
    if (toDo === undefined) navigate('/404', { replace: true });
  }, []);

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label="삭제"
        backgroundColor="#ff1744"
        hoverBackgroundColor="#f01440"
      />
    </Container>
  );
};

const Container = styled.div``;

const ToDo = styled.div``;
