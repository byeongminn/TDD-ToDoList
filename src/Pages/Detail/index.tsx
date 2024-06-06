import { Button } from 'Components';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const toDoList = JSON.parse(localStorage.getItem('ToDoList') || '[]');
  let toDo = '';
  if (id) {
    toDo = toDoList[id];
  }

  useEffect(() => {
    if (!toDo) navigate('/404', { replace: true });
  }, []);

  const onDelete = () => {
    if (id) {
      const list = [...toDoList];
      list.splice(Number.parseInt(id), 1);
      localStorage.setItem('ToDoList', JSON.stringify(list));
      navigate('/', { replace: true });
    }
  };

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label="삭제"
        backgroundColor="#ff1744"
        hoverBackgroundColor="#f01440"
        onClick={() => onDelete()}
      />
    </Container>
  );
};

const Container = styled.div``;

const ToDo = styled.div``;
