import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { updateColumnRequest } from '../../store/actions/columnsAction';

const ColumnTitle = ({ boardId, columnId, name }) => {
  const [toggle, setToggle] = useState(true);
  const [newName, setNewName] = useState(name);

  const dispatch = useDispatch();

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
                 defaultValue={name}
                 autoFocus={true}
                 onChange={(e) => setNewName(e.target.value)}
                 onKeyDown={(event) => {
                   if (event.key === 'Enter') {
                     dispatch(updateColumnRequest(boardId, columnId, { name: newName }));
                     setToggle(true);
                   } else if (event.key === 'Escape') {
                     setToggle(true);
                   }
                 }}
      />
    )
  );
};

export default ColumnTitle;
