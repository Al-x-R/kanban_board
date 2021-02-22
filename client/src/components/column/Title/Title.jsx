import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { updateColumnRequest } from '../../../store/actions/columnsAction';

const Title = ({ id, name }) => {
  const [toggle, setToggle] = useState(true);
  const [newName, setNewName] = useState(name);

  const dispatch =useDispatch()

  return (
      toggle ? (
      <Typography
        variant='subtitle1'
        onDoubleClick={() => {
          setToggle(false);
        }}
      >{name}</Typography>
      ) : (
      <TextField id="standard-basic"
                 onChange={(e) => setNewName(e.target.value)}
                 onKeyDown={(event) => {
                   if (event.key === 'Enter') {
                     dispatch(updateColumnRequest(id, { name: newName }))
                     setToggle(true)
                   } else if ( event.key === 'Escape') {
                     setToggle(true)
                   }
                 }}
      />
      )
  );
};

export default Title;
