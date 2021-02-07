import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const icon = { width: '40px', height: '40px' };
  const title = { padding: '40px 0 ' };
  const board = [0, 1, 2]

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {board.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} onClick={() => {console.log('click')}}>
                <AddIcon style={icon} color='primary'/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BoardsList;
