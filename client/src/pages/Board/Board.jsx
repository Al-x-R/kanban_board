import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColumnCreate from '../../components/column/ColumnCreate/ColumnCreate';
import Header from '../../components/Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BoardMenu from '../../components/boards/BoardMenu/BoardMenu';
import ColumnItem from '../../components/column/ColumnItem/ColumnItem';
import { useSelector } from 'react-redux';
import { boardsSelector } from '../../store/selectors';

const Board = () => {
  const [board, setBoard] = useState([]);

  const header = { height: '70px', width: '100%', backgroundColor: 'lightBlue', display: 'flex', alignItems: 'center' };
  const headerWrapper = { display: 'flex', justifyContent: 'space-between' };
  const content = { display: 'flex', justifyContent: 'flex-start' };

  const boards = useSelector(boardsSelector);
  console.log(boards);

  useEffect(() => {
    boards.map(board => {
      console.log(board.name);
      return setBoard(board)
    });
  }, [])

  const params = useParams();
  console.log(params);

  console.log(board)

  return (
    <div>
      <Header/>
      <Grid container style={header}>
        <Container style={headerWrapper}>
          <Typography variant="h6" component="h1">Board name - {board.name} </Typography>
          <BoardMenu/>
        </Container>
      </Grid>

      <Grid container style={content}>
        <ColumnItem/>
        <ColumnItem/>

        <Grid item xs={3}>
          <ColumnCreate/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
