import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColumnsRequest } from '../../../store/actions/columnsAction';
import Grid from '@material-ui/core/Grid';
import ColumnItem from '../ColumnItem/ColumnItem';
import { columnsSelector } from '../../../store/selectors';
import ColumnCreate from '../ColumnCreate/ColumnCreate';
import { useParams } from 'react-router-dom';

const ColumnsList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(getColumnsRequest(id));
  }, [id]);

  const columns = useSelector(columnsSelector);

  const content = { display: 'flex', justifyContent: 'flex-start' };

  return (
    <Grid container style={content}>
      {columns && columns.map(column => (
        <Grid item xs={3} key={column.id}>
          <ColumnItem name={column.name} id={column.id}/>
        </Grid>
      ))}
      <Grid item xs={3}>
        <ColumnCreate/>
      </Grid>
    </Grid>
  );
};

export default ColumnsList;
