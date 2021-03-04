import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import BoardCreate from '../BoardCreate/BoardCreate';
import { boardsListSelector } from '../../../store/selectors';
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
  const location = useLocation()
  const boards = useSelector(boardsListSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if ((location.pathname === '/'))
    dispatch(getBoardsRequest());
  }, [location.pathname]);

  const goToBoard = ({ target: {id} }) => {
    history.push(`/boards/${id}`)
    };

  return (
    <Container>
      <Typography component='h1' variant="h4" style={{ padding: '40px 0 ' }}>
        Personal Boards
      </Typography>
      <Grid container style={{ flexGrow: 1, flexWrap: 'wrap' }} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {boards && boards.map(board => (
              <Grid item key={board.id} onClick={goToBoard}>
                <Paper style={paperStyle} id={board?.id} >
                  {board?.name}
                </Paper>
              </Grid>
            ))}
            <Grid item><BoardCreate /></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BoardsList;
