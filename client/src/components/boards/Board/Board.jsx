import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BoardMenu from '../BoardMenu/BoardMenu';
import Typography from '@material-ui/core/Typography';
import { currentBoard } from '../../../store/selectors';
import ColumnsList from '../../column/ColumnsList/ColumnsList';
import { getBoardByIdRequest } from '../../../store/actions/boardByIdAction';

const boardHeaderStyles = {
  height: '70px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
};
const headerWrapperStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 35px',
};

const Board = () => {
  const board = useSelector(currentBoard);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getBoardByIdRequest(boardId));
  }, [boardId]);

  return (
    <Box>
      <Grid container style={boardHeaderStyles}>
        <Box style={headerWrapperStyles}>
          <Typography variant="h6" component="h1">{board?.name}</Typography>
          <BoardMenu boardId={boardId}/>
        </Box>
      </Grid>
      <ColumnsList boardId={boardId}/>
    </Box>
  );
};

export default Board;
