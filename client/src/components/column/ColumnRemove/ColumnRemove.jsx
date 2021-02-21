import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useCallback, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ColumnRemove = ({id}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeColumn = useCallback(() => {
    setAnchorEl(null);
  }, [id])

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
