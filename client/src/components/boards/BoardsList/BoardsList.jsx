import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import BoardCreate from '../BoardCreate/BoardCreate';
import { Box } from '@material-ui/core';
import boardsService from '../../../services/boardsService'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  paper: {
    height: 200,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const BoardsList = () => {
  const classes = useStyles();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    boardsService.getBoards()
      .then(data => setBoards(data))
  }, [])

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {boards.map(board => (
            <Grid key={board.id} item>
              <Paper className={classes.paper} onClick={() => {console.log('click')}}>
                <Box>
                  {board.name}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BoardsList;
