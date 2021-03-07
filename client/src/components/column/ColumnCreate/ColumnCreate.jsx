import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { createColumnRequest } from '../../../store/actions/columnsAction';

const paper = {
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  margin: '0',
  width: '190px',
  position: 'absolute',
  backgroundColor: 'white',
};

const menuButton = {
  width: '190px',
  height: '40px',
};

const icon = {
  width: '40px',
  color: 'grey',
  height: '40px',
};

const button = {
  width: '35px',
  flex: 'start',
  color: 'white',
};

const buttonsWrapper = {
  display: 'flex',
  padding: '7px 0 0',
  alignItems: 'center',
};

const ColumnCreate = ({ boardId }) => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => setOpen((prev) => !prev);

  const createColumn = () => {
    if (name) {
      dispatch(createColumnRequest(boardId, { boardId, name }));
    }
    setOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative', margin: '5px' }}>
        <Button style={menuButton} color='primary' variant="contained"
                onClick={handleClick}>
          Add new list
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
          <Box style={buttonsWrapper}>
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
