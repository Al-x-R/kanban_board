import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '25px',
    marginTop: '20px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const toolBar = { display: 'flex', justifyContent: 'space-between'  }

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

        <Box component="span" m={1}>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/register">Register</Link>
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
