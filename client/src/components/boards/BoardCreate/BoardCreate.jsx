import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../store/selectors';

import boardsService from '../../../services/boardsService'

const BoardCreate = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState(0)

  const user = useSelector(userSelector)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function setNameHandler()  {
    boardsService.getBoards({ name, id })
    // axios.post('http://localhost:3001/boards', { name, id });
    setOpen(false);
  };

  useEffect(() => {
    setId(user.id)
    setNameHandler();
  }, []);

  const icon = { width: '40px', height: '40px' };
  const paper = { height: '200px', width: '200px', cursor: 'pointer' };
  const wrapper = { height: '200px', width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' };

  return (
    <Paper style={paper}>
      <Box style={wrapper} onClick={handleClickOpen}>
        <AddIcon style={icon} color='primary'/>
      </Box>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Please enter your new board name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
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
          <Button onClick={setNameHandler} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default BoardCreate;
