import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import formatCreatedAt from '../../../utils/formatDate';
import { cardActivities } from '../../../store/selectors';
import { getCardActivitiesRequest } from '../../../store/actions/activitiesAction';

const useStyles = makeStyles({
  list: {
    width: 'auto',
    maxWidth: 500,
  },
  fullList: {
    width: 'auto',
  },
  listItem: {
    padding: '0',
    margin: '0',
  },
  inline: {
    display: 'inline',
  },
  block: {
    display: 'inline',
    paddingLeft: 10,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const CardActivities = ({ boardId, cardId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activities = useSelector(cardActivities).filter(c => c.cardId === cardId);

  useEffect(() => {
    dispatch(getCardActivitiesRequest(boardId, cardId));
  }, [cardId]);

  return (
    <List>
      {activities.map(activity => (
        <ListItem key={activity.id} alignItems="flex-start" className={classes.listItem}>
          <Box className={classes.column}>
            <Box>
              <Typography
                component="div"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >{activity.user}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                className={classes.block}
                color="textPrimary"
              >{activity.action}
              </Typography>
            </Box>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {formatCreatedAt(activity.createdAt)}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default CardActivities;