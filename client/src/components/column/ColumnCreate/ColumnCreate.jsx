import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import columnService from '../../../services/columnService';

const ColumnCreate = () => {
  const [name, setName] = useState('');
  const params = useParams();

  const paper = { width: '250px', padding: '3px 7px' };
  const button = { width: '35px', flex: 'start', backgroundColor: '#4ebb22', color: 'white' };
  const icon = { width: '40px', height: '40px', color: 'grey' };
  const box = { display: 'flex', alignItems: 'center', padding: '7px 0 0' };

  const createColumn = () => {
    const boardId = params.id;
    console.log(boardId, name);
    columnService.createColumn({ boardId, name });
  };

  return (
    <Paper style={paper}>
      <TextField
        variant="outlined"
        autoFocus
        placeholder="Add new list..."
        required={true}
        id="columnName"
        label="Name"
        type="text"
        fullWidth
        onChange={e => setName(e.target.value)}
      />
      <Box style={box}>
        <Button variant="contained" style={button} onClick={createColumn}>
          Add
        </Button>
        <ClearIcon style={icon} onClick={() => {
          console.log('cancel');
        }} color="primary"/>
      </Box>
    </Paper>
  );
};

export default ColumnCreate;
