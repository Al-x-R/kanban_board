import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { userSelector } from '../../../store/selectors';
import { createBoardRequest } from '../../../store/actions/boardsAction';

const BoardCreate = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);

  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNewBoard = () => {
    const userId = user.id;

    if (name && userId) {
      dispatch(createBoardRequest({ name, userId }));
      history.push('/');
    }
    setOpen(false);
  };

  useEffect(() => {
    createNewBoard();
  }, []);

  const icon = { width: '40px', height: '40px', color: 'blue' };
  const paper = { height: '200px', width: '200px', cursor: 'pointer', backgroundColor: 'lightGrey' };
  const wrapper = {
    height: '200px', width: '200px',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', color: 'blue',
  };

  return (
    <Paper style={paper}>
      <Box style={wrapper} onClick={handleClickOpen}>
        <AddIcon style={icon}/>
        Create new board
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Please enter your new board name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required={true}
            margin="dense"
            id="bordName"
            label="Name"
            type="text"
            fullWidth
            onChange={e => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createNewBoard} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default BoardCreate;
