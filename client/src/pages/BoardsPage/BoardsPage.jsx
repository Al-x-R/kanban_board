import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BoardsList from '../../components/boards/BoardsList/BoardsList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';
import { getBoardsRequest } from '../../store/actions/boardsAction';
import Board from '../../components/boards/Board/Board';
import { userSelector } from '../../store/selectors';

const BoardsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const location = useLocation();
  const isLoading = useSelector(state => state.boards.isLoading);
  const isError = useSelector(state => state.boards.error);

  useEffect(() => {
    dispatch(getBoardsRequest())
  }, []);

  if (!user) {
    return <Redirect to={'/login'}/>;
  }

  return (
      <Container>
        <Typography component='h1' variant="h4" style={{ padding: '40px 0 ' }}>
          Personal Boards
        </Typography>
        {
          isError
            ? <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong>{isError}</strong>
            </Alert>
            :
            isLoading ? <CircularProgress/> : !isLoading ? <BoardsList /> : <Board />
        }
      </Container>
  );
};

export default BoardsPage;
