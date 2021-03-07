import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Redirect } from 'react-router-dom';
import { createBoardRequest, resetNewBoardReducer } from '../../../store/actions/newBoardAction';
import { userSelector, newBoardSelector } from '../../../store/selectors';

const iconStyle = {
  color: 'blue',
  width: '40px',
  height: '40px',
};

const paperStyle = {
  height: '200px',
  width: '200px',
  cursor: 'pointer',
  backgroundColor: 'lightGrey',
};

const wrapperStyle = {
  color: 'blue',
  width: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
};

const BoardCreate = () => {
  const [name, setName] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { id: userId } = useSelector(userSelector);
  /**
   * TODO spinner and error alert
   */
  const { isLoading, error, board } = useSelector(newBoardSelector);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const createNewBoard = () => {
    if (name && userId) {
      dispatch(createBoardRequest({ name, userId }));
    }
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      dispatch(resetNewBoardReducer());
    };
  }, []);

  if (board) {
    return <Redirect to={`/boards/${board.id}`} />;
  }

  return (
    <Paper style={paperStyle}>
      <Box style={wrapperStyle} onClick={handleClickOpen}>
        <AddIcon style={iconStyle} />
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
