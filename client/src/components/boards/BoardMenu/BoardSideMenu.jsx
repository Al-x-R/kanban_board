import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListIcon from '@material-ui/icons/List';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState, Fragment } from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import formatCreatedAt from '../../../utils/formatDate';
import { boardActivities, currentBoardSelector } from '../../../store/selectors';
import { removeBoardByIdRequest } from '../../../store/actions/currentBoardAction';
import { getBoardActivitiesRequest } from '../../../store/actions/activitiesAction';
import Box from '@material-ui/core/Box';

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

const BoardSideMenu = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const activities = useSelector(boardActivities);
  /**
   * TODO spinner and error alert
   */
  const { board, isLoading, error, isDeleted } = useSelector(currentBoardSelector);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getBoardActivitiesRequest(boardId));
  }, [boardId]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (
      event.key === 'Tab' || event.key === 'Shift'
    )) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const removeBoard = (anchor) => {
    dispatch(removeBoardByIdRequest(boardId));
    toggleDrawer(anchor, false);
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary='Menu' /><CloseIcon />
        </ListItem>
        <Divider />
        {['Remove board'].map((text, index) => (
          <ListItem button key={text} onClick={removeBoard} onKeyDown={removeBoard}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary='Activity' />
        </ListItem>
        {activities && activities.map((act) => (
          <Fragment key={act.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Freshcode" src="" />
              </ListItemAvatar>
              <ListItemText
                primary={act.user}
                secondary={
                  <Box className={classes.column}>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >{act.action}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >{formatCreatedAt(act.createdAt)}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </div>
  );

  if (!board && isDeleted) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {['Right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Show Menu</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardSideMenu;
