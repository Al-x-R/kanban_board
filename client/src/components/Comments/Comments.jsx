import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import formatCreatedAt from '../../utils/formatDate';
import { commentsSelector } from '../../store/selectors';
import { getCommentsRequest, removeCommentRequest } from '../../store/actions/commentsAction';


const useStyles = makeStyles({
  list: {
    width: 'auto',
    maxWidth: 500,
  },
  fullList: {
    width: 'auto',
  },
  inline: {
    display: 'inline',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  padding: {
    paddingRight: '10px',
  },
  blockStyle: {
    display: 'inline-block',
    borderBottom: '1px solid',
    marginRight: '10px',
    cursor: 'pointer',
  },
});

const Comments = ({ boardId, cardId }) => {
  const classes = useStyles();
  const [commentId, setCommentId] = useState(null);
  const dispatch = useDispatch();
  const comments = useSelector(commentsSelector);

  useEffect(() => {
    dispatch(getCommentsRequest(boardId, cardId));
  }, [cardId, dispatch]);

  useEffect(() => {
    if (commentId) {
      dispatch(removeCommentRequest(boardId, cardId, commentId));
    }
  }, [commentId]);

  return (
    <List>
      {comments.map(comment => (
        <ListItem alignItems="flex-start" key={comment.id}>
          <ListItemAvatar>
            <Avatar alt="Freshcode" src="F"/>
          </ListItemAvatar>
          <ListItemText
            primary={comment.user}
            secondary={
              <Box className={classes.column}>
                <Typography
                  component="div"
                  variant="body2"
                  color="textPrimary"
                >{comment.comment}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {formatCreatedAt(comment.createdAt)}
                </Typography>
                <Box>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.blockStyle}
                    color="textPrimary"
                    onClick={() => setCommentId(comment.id)}
                  >
                    Delete
                  </Typography>
                </Box>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Comments;
