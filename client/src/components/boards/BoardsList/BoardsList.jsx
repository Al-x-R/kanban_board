import React, { useEffect, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import BoardCreate from '../BoardCreate/BoardCreate';
import { boardsSelector } from '../../../store/selectors';
import { getBoardsRequest } from '../../../store/actions/boardsAction';

const paperStyle = {
  width: 200,
  height: 200,
  color: 'white',
  display: 'flex',
  fontSize: '18px',
  cursor: 'pointer',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightBlue',
};

const BoardsList = () => {
  const dispatch = useDispatch();
  /**
   * TODO spinner on loading
   * TODO error alert
   */
  const { boards, isLoading, error } = useSelector(boardsSelector);

  useEffect(() => {
    dispatch(getBoardsRequest());
  }, []);


  const mappedBoards = useMemo(() => boards.map((board) => (
    <Grid item key={board.id}>
      <Link to={`/boards/${board.id}`}>
        <Paper style={paperStyle} id={board?.id}>
          {board?.name}
        </Paper>
      </Link>
    </Grid>
  )), [boards]);

  return (
    <Container>
      <Typography component='h1' variant="h4" style={{ padding: '40px 0 ' }}>
        Personal Boards
      </Typography>
      <Grid container style={{ flexGrow: 1, flexWrap: 'wrap' }} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {mappedBoards}
            <Grid item>
              <BoardCreate />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BoardsList;
