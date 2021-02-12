import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { removeBoardByIdRequest } from '../../../store/actions/boardByIdAction';
import DeleteIcon from '@material-ui/icons/Delete';
import { boardByIdSelector } from '../../../store/selectors';


const BoardMenu = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const board = useSelector(boardByIdSelector);
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeBoard = () => {
    const id = board.id;
    dispatch(removeBoardByIdRequest(id));
    history.push('/boards')
    setOpen(false);
  };

  return (
    <div >
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
        <MenuItem ><AssignmentIcon/> Activity</MenuItem>
      </Menu>
    </div>
  );
};

export default BoardMenu;
