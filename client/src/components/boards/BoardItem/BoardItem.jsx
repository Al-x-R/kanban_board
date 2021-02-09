import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

const BoardItem = ({ name, id }) => {
  const  paper = { height: 200, width: 200, display: 'flex',
    justifyContent: 'center', alignItems: 'center', cursor: 'pointer', }

  return (
        <Paper style={paper} id={id} onClick={() => {console.log('click');}}>
          <Box>
            {name}
          </Box>
        </Paper>
  );
};

export default BoardItem;
