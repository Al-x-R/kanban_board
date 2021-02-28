import { useDrag } from 'react-dnd';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import { ItemTypes } from '../../../utils/items';
import { updateCardRequest, removeCardRequest } from '../../../store/actions/cardsAction';

const cardStyles = { width: '200px', margin: '5px' };
const closeIconStyles = { position: 'absolute', top: '5px', right: '5px', zIndex: '5' };
const titleStyles = { margin: '0', paddingLeft: '25px' };
const subtitleStyles = { margin: '0' };

const Card = ({ name, cardId, index, columnId, columnName }) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: cardId,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.column !== columnId) {
        dispatch(updateCardRequest(boardId, item.id, { columnId: dropResult.column }));
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const updateCard = () => {
    dispatch(updateCardRequest(boardId, cardId, { columnId, description, comment }));
    setOpen(false);
  };

  const removeCard = () => {
    dispatch(removeCardRequest(boardId, cardId));
    setOpen(false);
  };

  const opacity = isDragging ? '0.5' : '1';

  return (
    <Box style={cardStyles}>
      <Button ref={drag}
              style={{ opacity }}
              fullWidth={true}
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
      >
        {name}
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Typography style={titleStyles} variant="h6" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography style={titleStyles} variant="subtitle1" gutterBottom>
          {`in column ${columnName}`}
        </Typography>
        <DialogContent>
          <Tooltip title="Close">
            <CloseIcon style={closeIconStyles} onClick={handleClose}/>
          </Tooltip>
          <Grid container>
            <Grid item xs={8}>
              <DialogContentText style={subtitleStyles}>Add description</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="description"
                variant="outlined"
                placeholder="Edit the description"
                type="text"
                fullWidth
                onChange={e => setDescription(e.target.value)}
              />
            </Grid>
            <Box style={{ paddingLeft: '70px ' }}>
              <DialogContentText style={subtitleStyles}>Actions</DialogContentText>
              <Button color="primary" style={{ padding: '10px 0 ' }} onClick={removeCard}>
                Remove Card
              </Button>
            </Box>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <DialogContentText style={subtitleStyles}>Add comment</DialogContentText>
              <TextField
                variant="outlined"
                multiline={true}
                margin="dense"
                id="comment"
                type="text"
                placeholder="Add comment"
                fullWidth
                onChange={e => setComment(e.target.value)}
              />
              <DialogActions>
                <Button onClick={updateCard} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
          <DialogTitle id="form-title-3">Activity</DialogTitle>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Card;
