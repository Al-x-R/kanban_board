import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';
import BoardsList from '../../components/boards/BoardsList/BoardsList';
import BoardItem from '../../components/boards/BoardItem/BoardItem';

const BoardsPage = () => {
  const [isBoards, setIsBoards] = useState();
  const location = useLocation();

  useLayoutEffect(() => {
    setIsBoards(location.pathname === '/boards');
  }, [location.pathname]);

  return (
    <div>
      <Header/>
      <Container>
        <Typography component='h1' variant="h4" style={{ padding: '40px 0 ' }}>
          {
            isBoards
              ? 'Personal Boards'
              : 'Board'
          }
        </Typography>
        {
          isBoards
            ? <BoardsList />
            : <BoardItem />
        }
      </Container>
    </div>
  );
};

export default BoardsPage;
