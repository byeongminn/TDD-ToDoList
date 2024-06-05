import { Link } from 'react-router-dom';
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
      {pathname !== '/' && <GoBack to="/">돌아가기</GoBack>}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e40ff;
`;

const Title = styled.div`
  padding: 1.25rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: #ffffff;
`;

const GoBack = styled(Link)`
  padding: 1.25rem;
  position: absolute;
  left: 1.25rem;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
`;
