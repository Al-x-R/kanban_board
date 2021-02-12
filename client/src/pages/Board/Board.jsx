import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ColumnCreate from '../../components/column/ColumnCreate/ColumnCreate';
import Header from '../../components/Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BoardMenu from '../../components/boards/BoardMenu/BoardMenu';
import ColumnItem from '../../components/column/ColumnItem/ColumnItem';
import { getBoardByIdRequest } from '../../store/actions/boardByIdAction';
import { boardByIdSelector } from '../../store/selectors';

const Board = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const board = useSelector(boardByIdSelector);

  const header = { height: '70px', width: '100%', backgroundColor: 'lightBlue', display: 'flex', alignItems: 'center' };
  const headerWrapper = { display: 'flex', justifyContent: 'space-between' };
  const content = { display: 'flex', justifyContent: 'flex-start' };

  useEffect(() => {
    const id = params.id;
    dispatch(getBoardByIdRequest(id));
  }, [params]);

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
