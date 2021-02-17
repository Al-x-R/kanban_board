import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import Paper from '@material-ui/core/Paper';
import { createColumnRequest } from '../../../store/actions/columnsAction';
// import { columnSelector } from '../../../store/selectors';
import cardService from '../../../services/cardService';
import MenuItem from '@material-ui/core/MenuItem';
import { useParams } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Menu from '@material-ui/core/Menu';

const CardCreate = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const params = useParams();
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
  const menuButton = {width: '244px', height: '40px', }
  const button = { width: '35px', flex: 'start', color: 'white' };
  const icon = { width: '40px', height: '40px', color: 'grey' };
  const box = { display: 'flex', alignItems: 'center', padding: '7px 0 0' };

  const createCard = useCallback(() => {
    console.log('card create');
    cardService.createCard({ id, name });
    // dispatch(createColumnRequest({ columnId, name }))
  }, [name]);

  return (
    <div>
      <Button style={menuButton}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
