import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import BoardSideMenu from '../BoardMenu/BoardSideMenu';
import { useDispatch, useSelector } from 'react-redux';

import ColumnsList from '../../column/ColumnsList/ColumnsList';
import { currentBoardSelector } from '../../../store/selectors';
import { getBoardByIdRequest } from '../../../store/actions/currentBoardAction';

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
  const { board, isLoading, error } = useSelector(currentBoardSelector);
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
          <BoardSideMenu />
        </Box>
      </Grid>
      <ColumnsList boardId={boardId} />
    </Box>
  );
};

export default Board;
