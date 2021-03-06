import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState, Fragment } from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { boardActivities } from '../../../store/selectors';
import { removeBoardByIdRequest } from '../../../store/actions/boardByIdAction';
import { getBoardActivitiesRequest } from '../../../store/actions/activitiesAction';

const useStyles = makeStyles({
  list: {
    width: 'auto',
    maxWidth: 500,
  },
  fullList: {
    width: 'auto',
  },
});

const BoardSideMenu = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const activities = useSelector(boardActivities);
  const history = useHistory();
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getBoardActivitiesRequest(boardId));
  }, [boardId]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const removeBoard = (anchor) => {
    dispatch(removeBoardByIdRequest(boardId));
    history.replace('/');
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
        {['Remove board'].map((text, index) => (
          <ListItem button key={text} onClick={removeBoard} onKeyDown={removeBoard}>
            <ListItemIcon><DeleteIcon/></ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {activities && activities.map((act) => (
          <Fragment key={act.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Freshcode" src=""/>
              </ListItemAvatar>
              <ListItemText
                primary={act.user}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                    </Typography>
                    {act.action}
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
          </Fragment>
        ))}
      </List>
    </div>
  );

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