import React, { Fragment, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import formatCreatedAt from '../../utils/formatDate';
import {} from '../../store/selectors';
import { getCommentsRequest } from '../../store/actions/commentsAction';


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
});

const Comments = ({ boardId, cardId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comment.comments)
  console.log(comments)

  useEffect(() => {
    dispatch(getCommentsRequest(boardId,cardId));
  }, [cardId]);

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
              >comment
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {formatCreatedAt(comment.createdAt)}
              </Typography>
            </Box>
          }
        />
      </ListItem>
      ))}
    </List>
  );
};

export default Comments;
