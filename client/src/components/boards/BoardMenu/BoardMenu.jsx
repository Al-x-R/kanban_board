import { useDispatch } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useCallback, useState } from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { removeBoardByIdRequest } from '../../../store/actions/boardByIdAction';

const BoardMenu = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeBoard = useCallback(() => {
    dispatch(removeBoardByIdRequest(id));
    history.replace('/');
    setAnchorEl(null);
  }, [dispatch]);

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
        <MenuItem onClick={removeBoard}><DeleteIcon/> Remove board</MenuItem>
        <Divider/>
        <MenuItem><AssignmentIcon/> Activity</MenuItem>
      </Menu>
    </div>
  );
};

export default BoardMenu;
