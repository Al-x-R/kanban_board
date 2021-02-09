import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BoardCreate from '../BoardCreate/BoardCreate';
import BoardItem from '../BoardItem/BoardItem';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../../store/selectors';
import { getBoardsRequest } from '../../../store/actions/boardsAction';

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);

  useEffect(() => {
    dispatch(getBoardsRequest());
  }, []);

  return (
    <Grid container style={{ flexGrow: 1, flexWrap: 'wrap' }} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {boards.length > 0 && boards.map(board => (
            <Grid item>
              <BoardItem key={board.id} id={board.id} name={board.name}/>
            </Grid>
          ))}
          <Grid item><BoardCreate/></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BoardsList;
