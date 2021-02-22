import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { createColumnRequest } from '../../../store/actions/columnsAction';

const ColumnCreate = ({ id }) => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const paper = {
    width: '244px', margin: '0', position: 'absolute',
    top: 0, right: 0, left: 0, zIndex: 1, border: '1px solid', backgroundColor: 'lightGrey',
  };
  const menuButton = { width: '244px', height: '40px' };
  const button = { width: '35px', flex: 'start', color: 'white' };
  const icon = { width: '40px', height: '40px', color: 'grey' };
  const box = { display: 'flex', alignItems: 'center', padding: '7px 0 0' };

  const createColumn = () => {
    const boardId = id;

    if (name) {
      dispatch(createColumnRequest({ boardId, name }));
    }
    setOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative' }}>
        <Button style={menuButton} color='primary' variant="contained"
                onClick={handleClick}>
          Add new list...
        </Button>
        {open ? <div style={paper}>
          <TextField
            variant="outlined"
            autoFocus
            placeholder="Add new list..."
            required={true}
            label="Column name"
            type="text"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <Box style={box}>
            <Button variant="contained" style={button} color='primary' onClick={createColumn}>
              Add
            </Button>
            <ClearIcon style={icon} onClick={handleClick} color="primary"/>
          </Box>
        </div> : null}
      </div>
    </ClickAwayListener>
  );
};

export default ColumnCreate;
