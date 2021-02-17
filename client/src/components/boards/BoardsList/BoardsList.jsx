import React, { useCallback, useEffect } from 'react';
import { useHistory, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BoardCreate from '../BoardCreate/BoardCreate';
import { boardsSelector } from '../../../store/selectors';
import { getBoardsRequest } from '../../../store/actions/boardsAction';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Board from '../Board/Board';

const BoardsList = (props) => {
  const boards = useSelector(boardsSelector);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardsRequest());
  }, []);

  console.group('B-List')
  console.log('boards list ', boards);
  console.groupEnd()

  const paper = {
    height: 200, width: 200, display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    cursor: 'pointer', backgroundColor: 'lightBlue',
    color: 'white', fontSize: '18px', fontWeight: 'bold',
  };

  // const goToBoard = ({ target: { id } }) => (
  //   history.push(`/boards/${id}`)
  // )

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
              <Grid item key={board.id}>
                <Link to={`${props.match.url}/${board.id}`} style={{textDecoration:'none'}}>
                  <Paper style={paper} id={board.id}  >
                    {board.name}
                  </Paper>
                </Link>
              </Grid>
            ))}
            <Grid item><BoardCreate/></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Route path={`${props.match.url}/:id`}
             render={props => {
               const board = boards.find(b => b.id === props.match.params.id);
               return <Board {...props} board={board}/>;
             }}
      />
    </Container>
  );
};

export default BoardsList;
