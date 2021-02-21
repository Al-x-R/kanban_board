import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import BoardCreate from '../BoardCreate/BoardCreate';
import { boardsSelector } from '../../../store/selectors';
import { getBoardsRequest } from '../../../store/actions/boardsAction';

const BoardsList = () => {
  const boards = useSelector(boardsSelector);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardsRequest());
  }, []);

  const paper = {
    height: 200, width: 200, display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    cursor: 'pointer', backgroundColor: 'lightBlue',
    color: 'white', fontSize: '18px', fontWeight: 'bold',
  };

  const goToBoard = ({ target: { id } }) => (
    history.push(`/boards/${id}`)
  )

  if (!boards.length) return null;

  return (
    <Container>
      <Typography component='h1' variant="h4" style={{ padding: '40px 0 ' }}>
        Personal Boards
      </Typography>
      <Grid container style={{ flexGrow: 1, flexWrap: 'wrap' }} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {boards.map(board => (
              <Grid item key={board.id} onClick={goToBoard}>
                  <Paper style={paper} id={board.id}  >
                    {board.name}
                  </Paper>
              </Grid>
            ))}
            <Grid item><BoardCreate/></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BoardsList;
