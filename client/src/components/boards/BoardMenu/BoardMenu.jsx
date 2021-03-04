import Menu from '@material-ui/core/Menu';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useEffect, useState } from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { boardActivities } from '../../../store/selectors';
import { removeBoardByIdRequest } from '../../../store/actions/boardByIdAction';
import { getBoardActivitiesRequest } from '../../../store/actions/activitiesAction';

const BoardMenu = ({ boardId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const activities = useSelector(boardActivities);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const removeBoard = () => {
    dispatch(removeBoardByIdRequest(boardId));
    history.replace('/');
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getBoardActivitiesRequest(boardId));
  }, [boardId]);

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Show Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={removeBoard}><DeleteIcon/>Remove board</MenuItem>
        <Divider/>
        {activities && activities.map(act => (
          <MenuItem key={act.id}><AssignmentIcon/>{act?.action}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default BoardMenu;
