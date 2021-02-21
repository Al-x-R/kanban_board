import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

const Card = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button fullWidth variant="outlined" color="primary" onClick={handleClickOpen}>
        card name
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Card Name</DialogTitle>
        <DialogContent>
          <DialogContentText>{`in 'List name'`}</DialogContentText>
          <TextField
            autoFocus
            id="description"
            variant="outlined"
            placeholder="Edit the description"
            type="text"
            fullWidth
          />
          <DialogTitle id="form-title-2">Add comment</DialogTitle>
          <TextField
            autoFocus
            variant="outlined"
            multiline={true}
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
          />
          <DialogTitle id="form-title-3">Activity</DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Card;
