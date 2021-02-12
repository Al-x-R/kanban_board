import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BoardCreate from '../BoardCreate/BoardCreate';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../../store/selectors';
import { getBoardsRequest } from '../../../store/actions/boardsAction';
import Paper from '@material-ui/core/Paper';
import boardsService from '../../../services/boardsService';

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBoardsRequest());
  }, []);

  const paper = {
    height: 200, width: 200, display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    cursor: 'pointer', backgroundColor: 'lightBlue',
    color: 'white', fontSize: '18px', fontWeight: 'bold'
  };

  const onClickHandler = (e) => {
    const id = e.target.id
    boardsService.getBoardById(id)
    return history.push(`board/${id}`)
  }

  return (
    <Grid container style={{ flexGrow: 1, flexWrap: 'wrap' }} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {boards.length > 0 && boards.map(board => (
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
