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

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ToDo = styled.div`
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  min-width: 21.875rem;
  height: 21.875rem;
  border: 1px solid #bdbdbd;
  overflow-y: auto;
`;
