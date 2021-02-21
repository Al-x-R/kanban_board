import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { userSelector } from '../../store/selectors';
import { logoutRequest } from '../../store/actions/authAction';

const Header = () => {
  const toolBar = { display: 'flex', justifyContent: 'space-between' };
  const icon = { width: '40px', height: '40px', margin: '0 5px', color: 'white' };

  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutRequest());
  };

  const link = { textDecoration: 'none', color: 'white' };
  return (
    <AppBar position="static" style={{ backgroundColor: '#002984' }}>
      <Toolbar style={toolBar}>
        <Box component="span" m={1}>
          <Link to="/boards" style={link}>
            <Typography variant="h6"> BOARDS</Typography>
          </Link>
        </Box>
        {
          user
            ? <Box component="span" m={1}>
              <Link to="/boards"><AccountCircleIcon style={icon}/></Link>

              <ExitToAppIcon onClick={logout} style={icon}/>
            </Box>
            : <Box component="span" m={1}>
              <Button color="inherit">
                <Link to="/login" style={link}>Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/register" style={link}>Register</Link>
              </Button>
            </Box>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
