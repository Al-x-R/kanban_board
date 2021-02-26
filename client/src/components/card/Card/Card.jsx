import { useDrag } from 'react-dnd';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import { ItemTypes } from '../../../utils/items';
import { updateCardRequest } from '../../../store/actions/cardsAction';

const Card = ({ name, id, index, columnId, columnName }) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  console.log('columnId ', columnId);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: id,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.column !== id) {
        dispatch(updateCardRequest(item.id, { columnId: dropResult.column }));
      }
      console.log('dropResult', dropResult);
      console.log('dropResult column', dropResult.column);
      console.log('item ', item);
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateCard = () => {
    dispatch(updateCardRequest(id, { description, comment }));
    setOpen(false);
  };

  const opacity = isDragging ? '0.5' : '1';

  return (
    <Box style={{ width: '200px', margin: '5px' }}>
      <Button ref={drag} style={{ opacity }}
              fullWidth={true} variant="outlined" color="primary" onClick={handleClickOpen}>
        {name}
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`in ${columnName}`}</DialogContentText>
          <TextField
            autoFocus
            id="description"
            variant="outlined"
            placeholder="Edit the description"
            type="text"
            fullWidth
            onChange={e => setDescription(e.target.value)}
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
            onChange={e => setComment(e.target.value)}
          />
          <DialogTitle id="form-title-3">Activity</DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCard} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Card;
