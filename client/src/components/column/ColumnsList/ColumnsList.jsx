import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ColumnItem from '../ColumnItem/ColumnItem';
import ColumnCreate from '../ColumnCreate/ColumnCreate';
import { columnsSelector } from '../../../store/selectors';
import { getColumnsRequest } from '../../../store/actions/columnsAction';

const ColumnsList = () => {
  const dispatch = useDispatch();
  const columns = useSelector(columnsSelector);
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getColumnsRequest(boardId));
  }, [boardId]);

  const content = { display: 'flex', justifyContent: 'flex-start' };

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container style={content} spacing={1}>
        {columns && columns.map(column => (
          <Grid item key={column.id}>
            <ColumnItem name={column?.name} columnId={column.id}/>
          </Grid>
        ))}
        <Grid item xs={3}>
          <ColumnCreate boardId={boardId}/>
        </Grid>
      </Grid>
    </DndProvider>
  );
};

export default ColumnsList;
