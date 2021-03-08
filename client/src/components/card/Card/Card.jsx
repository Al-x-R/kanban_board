import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListIcon from '@material-ui/icons/List';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import PaymentIcon from '@material-ui/icons/Payment';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useRef, useEffect } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DescriptionIcon from '@material-ui/icons/Description';
import DialogContentText from '@material-ui/core/DialogContentText';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Comments from '../../Comments/Comments';
import { ItemTypes } from '../../../utils/items';
import { cardActivities, userSelector } from '../../../store/selectors';
import { addCommentRequest } from '../../../store/actions/commentsAction';
import { getCardActivitiesRequest } from '../../../store/actions/activitiesAction';
import { updateCardRequest, removeCardRequest, moveCardInColumn } from '../../../store/actions/cardsAction';

const cardStyles = { width: '195px', margin: '5px' };
const subtitleStyles = { margin: '0', display: 'flex', alignItems: 'center' };
const closeIconStyles = { position: 'absolute', top: '5px', right: '5px', zIndex: '5' };
const titleStyles = { margin: '0', paddingLeft: '25px', display: 'flex', alignItems: 'center' };
const actionsBoxStyles = { display: 'flex', padding: '10px 0', justifyContent: 'space-between' };

const Card = ({ name, cardId, index, columnId, columnName }) => {
  const [open, setOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');
  const [dragIndex, setDragIndex] = useState();
  const [hoverIndex, setHoverIndex] = useState();
  // console.log('drag',dragIndex)
  // console.log('hover',hoverIndex)

  const { email } = useSelector(userSelector);

  const dispatch = useDispatch();
  const { boardId } = useParams();

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      console.log('item', item);
      console.log('monitor', monitor);
      const dragIndex = item.index;
      const hoverIndex = index;
      console.log('drag', dragIndex);
      console.log('hover', hoverIndex);
      // setDragIndex(item.index);
      // setHoverIndex(index);
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

      // dispatch(moveCardInColumn(dragIndex, hoverIndex))
      // dragIndex
      // hoverIndex

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
      } else {
        // dispatch(moveCardInColumn(dragIndex, hoverIndex))
      }
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
    dispatch(updateCardRequest(boardId, cardId, { columnId, description }));
  };

  const removeCard = () => {
    dispatch(removeCardRequest(boardId, cardId));
    setOpen(false);
  };

  const saveComment = () => {
    if (comment) {
      dispatch(addCommentRequest(boardId, cardId, { cardId, comment, user: email }));
    }
    setComment('');
  };

  useEffect(() => {
    dispatch(getCardActivitiesRequest(boardId, cardId));
  }, [cardId]);

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
          <PaymentIcon/> {name}
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
              <DialogContentText style={subtitleStyles}>
                <DescriptionIcon/>Add description
              </DialogContentText>
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
              <Button onClick={updateCard} color="primary" variant="outlined" size="small">
                Save
              </Button>
              <Box style={actionsBoxStyles}>
                <Typography variant="h6" style={subtitleStyles}>
                  <ListIcon/>Actions
                </Typography>
                <Button onClick={() => {
                }} color="primary">
                  Show details
                </Button>
              </Box>
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
              <DialogContentText style={subtitleStyles}><ChatBubbleOutlineIcon/>Add comment</DialogContentText>
              <TextField
                variant="outlined"
                multiline={true}
                margin="dense"
                id="comment"
                value={comment}
                type="text"
                placeholder="Add comment"
                fullWidth
                onChange={e => setComment(e.target.value)}
              />
              <Button onClick={saveComment} color="primary" variant="outlined" size="small">
                Save comment
              </Button>

              {/*details*/}

              <Comments boardId={boardId} cardId={cardId}/>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Card;
