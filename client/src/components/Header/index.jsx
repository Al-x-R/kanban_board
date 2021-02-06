import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/selectors';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { logoutRequest } from '../../store/actions/authAction';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '25px',
    marginTop: '20px',
    width: '50px',
    height: '50px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const toolBar = { display: 'flex', justifyContent: 'space-between' };
  const icon = { width: '40px', height: '40px', margin: '0 5px' };

  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <AppBar position="static">
      <Toolbar style={toolBar}>
        <Box component="span" m={1}>
          <Typography variant="h6">
            <Link to="/">
              BOARDS
            </Link>
          </Typography>
        </Box>
        {user
          ? <Box component="span" m={1}>
              <AccountCircleIcon style={icon}/>
              <ExitToAppIcon onClick={logout} style={icon}/>
            </Box>
          : <Box component="span" m={1}>
              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
            </Box>
        }

      </Toolbar>
    </AppBar>
  );
};

export default Header;
