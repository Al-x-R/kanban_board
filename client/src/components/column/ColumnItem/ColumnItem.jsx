import React, { useCallback, useEffect } from 'react';
import CardCreate from '../../card/CardCreate/CardCreate';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ColumnRemove from '../ColumnRemove/ColumnRemove';
import Card from '../../card/Card/Card';
import Divider from '@material-ui/core/Divider';

const ColumnItem = ({ id, name }) => {
  const divStyle = { display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', overflow: 'hidden' };

  return (
    <div style={{border: '1px solid', borderRadius: '4px' ,maxWidth: '244px', display: 'flex',
      alignItems: 'center', flexDirection: 'column'}}>
      <List role="list" subheader={
        <ListSubheader component='div'  style={divStyle}>
          {name} <ColumnRemove id={id} />
        </ListSubheader>}>
        <ListItem role="listitem" style={{padding: '0', display: 'block'}}>
          <Card />
        </ListItem>
        <Divider/>
        <ListItem role="listitem" style={{padding: '0'}}>
          <CardCreate id={id}/>
        </ListItem>
      </List>
    </div>

  );
};

export default ColumnItem;
