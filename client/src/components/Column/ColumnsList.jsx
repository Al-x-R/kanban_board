import { DndProvider } from 'react-dnd';
import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GridListTile from '@material-ui/core/GridListTile';

import ColumnItem from './ColumnItem';
import ColumnCreate from './ColumnCreate';
import { columnsSelector } from '../../store/selectors';
import { getColumnsRequest } from '../../store/actions/columnsAction';


const useStyles = makeStyles(() => ({
  gridList: {
    paddingBottom: 50,
    minHeight: 500,
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }
}));

const gridItem = {
  width: '200px',
  height: 'auto'
}

const ColumnsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const columns = useSelector(columnsSelector);
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getColumnsRequest(boardId));
  }, [boardId]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
          {columns && columns.map(column => (
            <GridListTile key={column.id} style={gridItem} >
              <ColumnItem name={column?.name} columnId={column.id}/>
            </GridListTile>
          ))}
          <GridListTile style={gridItem}>
            <ColumnCreate boardId={boardId}/>
          </GridListTile>
        </GridList>
      </Box>
    </DndProvider>
  );
};

export default ColumnsList;
