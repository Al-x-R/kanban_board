import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DialogContentText from '@material-ui/core/DialogContentText';
import DescriptionIcon from '@material-ui/icons/Description';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ListIcon from '@material-ui/icons/List';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CardActivities from './CardActivities';
import CardComments from './CardComments';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userSelector } from '../../store/selectors';
import { removeCardRequest, updateCardRequest } from '../../store/actions/cardsAction';
import { addCommentRequest } from '../../store/actions/commentsAction';

const subtitleStyles = { margin: '0', display: 'flex', alignItems: 'center' };
const actionsBoxStyles = { display: 'flex', padding: '10px 0', justifyContent: 'space-between' };

const CardContent = ({ cardId, columnId }) => {
  const [isShow, setIsShow] = useState(false);
  const [comment, setComment] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const { boardId } = useParams();
  const { email } = useSelector(userSelector);

  const showCardDetails = () => setIsShow(prevState => !prevState);

  const updateCard = () => {
    dispatch(updateCardRequest(boardId, cardId, { columnId, description }));
  };

  const removeCard = () => {
    dispatch(removeCardRequest(boardId, cardId));
  };

  const saveComment = () => {
    if (comment) {
      dispatch(addCommentRequest(boardId, cardId, { cardId, comment, user: email }));
    }
    setComment('');
  };

  const showDetailsButtonTitle = isShow ? 'Hide details' : 'Show details';

  return (
    <div>
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
            <Button onClick={showCardDetails} color="primary">
              {showDetailsButtonTitle}
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

          {isShow && <CardActivities boardId={boardId} cardId={cardId}/>}

          <CardComments boardId={boardId} cardId={cardId}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardContent;
