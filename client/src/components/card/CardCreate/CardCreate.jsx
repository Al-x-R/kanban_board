import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { createCardRequest } from '../../../store/actions/cardsAction';

const paper = {
  width: '210px',
  margin: '0',
};

const menuButton = {
  width: '200px',
  height: '40px',
};

const button = {
  width: '35px',
  flex: 'start',
  color: 'white',
};

const icon = {
  width: '40px',
  height: '40px',
  color: 'grey',
};

const box = {
  display: 'flex',
  padding: '7px 0 0',
  alignItems: 'center',
};

const CardCreate = ({ columnId }) => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const createCard = () => {
    if (name) {
      dispatch(createCardRequest(boardId, { columnId, name }));
    }
    setOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative' }}>
        <Button style={menuButton} onClick={handleClick}>
          Add a new card
        </Button>
        {open ? <div style={paper}>
          <TextField
            variant="outlined"
            autoFocus
            placeholder="Add card..."
            required={true}
            label="Card name"
            type="text"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <Box style={box}>
            <Button variant="contained" style={button} color='primary' onClick={createCard}>
              Add
            </Button>
            <ClearIcon style={icon} onClick={handleClick} color="primary"/>
          </Box>
        </div> : null}
      </div>
    </ClickAwayListener>
  );
};

export default CardCreate;
