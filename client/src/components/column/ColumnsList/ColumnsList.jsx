import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';

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
    <Grid container style={content}>
      {columns && columns.map(column => (
        <Grid item xs={3} key={column.id}>
          <ColumnItem name={column.name} id={column.id}/>
        </Grid>
      ))}
      <Grid item xs={3}>
        <ColumnCreate id={id}/>
      </Grid>
    </Grid>
  );
};

export default ColumnsList;
