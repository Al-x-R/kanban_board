import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BoardMenu from '../BoardMenu/BoardMenu';
import { getBoardByIdRequest } from '../../../store/actions/boardByIdAction';
import ColumnsList from '../../column/ColumnsList/ColumnsList';

const Board = ({history, match }) => {

  const dispatch = useDispatch();
  const id = match.params.id;
  const board = useSelector(state => state.boards.board)
  console.group('Board');
  console.log('board ', board);
  console.log('history', history);
  console.log('match', match);
  console.log('match.params', id);
  console.groupEnd();

  const header = { height: '70px', width: '100%', backgroundColor: 'lightBlue', display: 'flex', alignItems: 'center' };
  const headerWrapper = { display: 'flex', justifyContent: 'space-between' };

  useLayoutEffect(() => {
    dispatch(getBoardByIdRequest(id));
  }, [id]);

  return (
    <div>
      <Grid container style={header}>
        <Container style={headerWrapper}>
          <Typography variant="h6" component="h1">Board name -  </Typography>
          <BoardMenu/>
        </Container>
      </Grid>
      <ColumnsList/>
    </div>
  );
};

export default Board;
