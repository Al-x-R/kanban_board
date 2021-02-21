import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useCallback, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { createCardRequest } from '../../../store/actions/cardsAction';

const CardCreate = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const paper = { width: '210px', margin: '0' };
  const menuButton = { width: '244px', height: '40px' };
  const button = { width: '35px', flex: 'start', color: 'white' };
  const icon = { width: '40px', height: '40px', color: 'grey' };
  const box = { display: 'flex', alignItems: 'center', padding: '7px 0 0' };

  const createCard = useCallback(() => {
    const columnId = id
    console.log('card create');
    dispatch(createCardRequest({ columnId, name }))
  }, [id]);

  return (
    <div>
      <Button style={menuButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Add a card...
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <div style={paper}>
            <TextField
              variant="outlined"
              autoFocus
              placeholder="Add new list..."
              required={true}
              label="Column name"
              type="text"
              fullWidth
              onChange={e => setName(e.target.value)}
            />
            <Box style={box}>
              <Button variant="contained" style={button} color='primary' onClick={createCard}>
                Add
              </Button>
              <ClearIcon style={icon} onClick={handleClose} color="primary"/>
            </Box>
          </div>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default CardCreate;
