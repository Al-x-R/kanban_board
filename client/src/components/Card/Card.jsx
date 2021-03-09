import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useState, useRef } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import PaymentIcon from '@material-ui/icons/Payment';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

import CardContent from './CardContent';
import { ItemTypes } from '../../utils/items';
import { updateCardRequest } from '../../store/actions/cardsAction';

const cardStyles = { width: '195px', margin: '5px' };
const closeIconStyles = { position: 'absolute', top: '5px', right: '5px', zIndex: '5' };
const titleStyles = { margin: '0', paddingLeft: '25px', display: 'flex', alignItems: 'center' };

const Card = ({ name, cardId, index, columnId, columnName }) => {
  const [open, setOpen] = useState(false);

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

      // dispatch(moveCardInColumn(dragIndex, hoverIndex))
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
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const backgroundColor = isDragging ? 'lightBlue' : '';

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
          <CardContent cardId={cardId} columnId={columnId}/>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Card;
