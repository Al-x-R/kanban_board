import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';
import BoardsList from '../../components/boards/BoardsList/BoardsList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getBoardsRequest } from '../../store/actions/boardsAction';

const BoardsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.boards.isLoading);

  useEffect(() => {
    dispatch(getBoardsRequest());
  }, []);

  return (
    <div>
      <Header/>
      <Container>
        <Typography component='h1' variant="h4" style={{ padding: '40px 0 ' }}>
          Personal Boards
        </Typography>
        {
          isLoading ? <CircularProgress/> : <BoardsList/>
        }
      </Container>
    </div>
  );
};

export default BoardsPage;
