import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ColumnItem from '../ColumnItem/ColumnItem';
import ColumnCreate from '../ColumnCreate/ColumnCreate';
import { columnsSelector } from '../../../store/selectors';
import { getColumnsRequest } from '../../../store/actions/columnsAction';

const ColumnsList = ({ id }) => {
  const dispatch = useDispatch();
  const columns = useSelector(columnsSelector);

  useEffect(() => {
    dispatch(getColumnsRequest(id));
  }, [id]);

  const content = { display: 'flex', justifyContent: 'flex-start' };

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container style={content} spacing={1}>
        {columns && columns.map(column => (
          <Grid item key={column.id}>
            <ColumnItem name={column.name} id={column.id}/>
          </Grid>
        ))}
        <Grid item xs={3}>
          <ColumnCreate id={id}/>
        </Grid>
      </Grid>
    </DndProvider>
  );
};

export default ColumnsList;
