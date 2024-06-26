import { Button } from 'Components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Add = () => {
  const navigate = useNavigate();
  const [toDo, setToDo] = useState<string>('');

  const addToDo = () => {
    if (toDo === '') return;
    const list = JSON.parse(localStorage.getItem('ToDoList') || '[]');
    localStorage.setItem('ToDoList', JSON.stringify([...list, toDo]));
    navigate('/');
  };

  return (
    <Container>
      <Input
        placeholder="할 일을 입력해 주세요."
        onChange={(e) => setToDo(e.target.value)}
      />
      <Button label="추가" onClick={() => addToDo()} />
    </Container>
  );
};

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  padding: 0.625rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
`;
