import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';
import BoardsList from '../../components/boards/BoardsList/BoardsList';

const BoardsPage = () => {
  const title = { padding: '40px 0 ' };


  return (
    <div>
      <Header/>
      <Container>
        <Typography component='h1' variant="h4" style={title}>
          Boards page
        </Typography>
        <BoardsList />
      </Container>
    </div>
  );
};

export default BoardsPage;
