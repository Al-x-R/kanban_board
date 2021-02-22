import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BoardMenu from '../BoardMenu/BoardMenu';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { boardSelector } from '../../../store/selectors';
import ColumnsList from '../../column/ColumnsList/ColumnsList';
import { getBoardByIdRequest } from '../../../store/actions/boardByIdAction';

const Board = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  const board = useSelector(boardSelector)
  const name = board.name

  const header = { height: '70px', width: '100%', backgroundColor: 'lightBlue', display: 'flex', alignItems: 'center' };
  const headerWrapper = { display: 'flex', justifyContent: 'space-between' };

  useEffect(() => {
    dispatch(getBoardByIdRequest(id));
  }, []);

  return (
    <div>
      <Grid container style={header}>
        <Container style={headerWrapper}>
          <Typography variant="h6" component="h1">{name}</Typography>
          <BoardMenu id={id} />
        </Container>
      </Grid>
      <ColumnsList id={id} />
    </div>
  );
};

export default Board;
