import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { userSelector } from '../../../store/selectors';
import { createBoardRequest } from '../../../store/actions/boardsAction';

const BoardCreate = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(0);

  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createNewBoard() {
    if (name && userId) {
      dispatch(createBoardRequest({ name, userId }));
    }
    setOpen(false);
  }

  useEffect(() => {
    setUserId(user.id);
    createNewBoard();
  }, []);

  const icon = { width: '40px', height: '40px', color: 'blue' };
  const paper = { height: '200px', width: '200px', cursor: 'pointer', backgroundColor: 'lightGrey' };
  const wrapper = { height: '200px', width: '200px',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', color: 'blue' };

  return (
    <Paper style={paper} >
      <Box style={wrapper} onClick={handleClickOpen} >
        <AddIcon style={icon} />
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
