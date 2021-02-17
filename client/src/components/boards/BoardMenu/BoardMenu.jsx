import React, { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { removeBoardByIdRequest } from '../../../store/actions/boardByIdAction';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

const BoardMenu = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const params = useParams();
  const id = params.id;
  console.log('menu',id)

  const dispatch = useDispatch();
  const board = useSelector(state => state.boards.board);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeBoard = useCallback(() => {
    dispatch(removeBoardByIdRequest(id));
    localStorage.removeItem('board');
    history.replace('/boards');
    setOpen(false);
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
