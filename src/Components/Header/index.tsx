import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const { pathname } = useLocation();

  let title = '에러';

  if (pathname === '/') {
    title = '할 일 목록';
  } else if (pathname === '/add') {
    title = '할 일 추가';
  } else if (pathname.startsWith('/detail')) {
    title = '할 일 상세';
  }

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div``;
