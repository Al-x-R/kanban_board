import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BoardCreate from '../BoardCreate/BoardCreate';
import { boardsSelector } from '../../../store/selectors';
import { getBoardByIdRequest } from '../../../store/actions/boardByIdAction';

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);
  const history = useHistory();

  const paper = {
    height: 200, width: 200, display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    cursor: 'pointer', backgroundColor: 'lightBlue',
    color: 'white', fontSize: '18px', fontWeight: 'bold',
  };

  const onClickHandler = (e) => {
    const id = e.target.id;
    dispatch(getBoardByIdRequest(id));
    history.push(`boards/${id}`);
  };

  return (
    <Grid container style={{ flexGrow: 1, flexWrap: 'wrap' }} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {boards && boards.map(board => (
            <Grid item key={board.id}>
              <Paper style={paper} id={board.id} onClick={onClickHandler}>
                {board.name}
              </Paper>
            </Grid>
          ))}
          <Grid item><BoardCreate/></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BoardsList;
