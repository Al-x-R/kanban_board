import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { removeColumnRequest } from '../../../store/actions/columnsAction';

const ColumnRemove = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeColumn = useCallback(() => {
    console.log(id, removeColumnRequest());
    dispatch(removeColumnRequest(id));
    setAnchorEl(null);
  }, [dispatch]);

  return (
    <div>
      <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={removeColumn}>Remove</MenuItem>
      </Menu>
    </div>
  );
};

export default ColumnRemove;
