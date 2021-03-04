import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState, useRef, useEffect } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import { ItemTypes } from '../../../utils/items';
import { cardActivities } from '../../../store/selectors';
import { getCardActivitiesRequest } from '../../../store/actions/activitiesAction';
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

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      const dragIndex = item.index;

      const hoverIndex = index;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      item.index = hoverIndex;

    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: {
      index,
      columnId,
      type: ItemTypes.CARD,
      id: cardId,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.column !== columnId) {
        dispatch(updateCardRequest(boardId, item.id, { from: columnId, columnId: dropResult.column }));
      }
      console.group('---');
      console.log(monitor);
      console.log(item);
      console.groupEnd();
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const backgroundColor = isDragging ? 'lightBlue' : '';

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

  useEffect(() => {
    dispatch(getCardActivitiesRequest(boardId, cardId));
  },[cardId]);

  return (
    <Box style={cardStyles}>
      <Button ref={ref}
              style={{ backgroundColor }}
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
