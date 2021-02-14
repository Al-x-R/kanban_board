import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '../../card/Card';

const ColumnList = () => {
  return (
    <div>
      <List  role="list">
        <ListItem role="listitem">
          <Card/>
        </ListItem>
        <ListItem role="listitem">
          <Card/>
        </ListItem>
        <ListItem role="listitem">
          <Card/>
        </ListItem>
        <ListItem role="listitem">
          <Card/>
        </ListItem>
        <ListItem role="listitem">
          <Card/>
        </ListItem>
        <ListItem role="listitem">
          <Card/>
        </ListItem>
      </List>

    </div>
  );
};

export default ColumnList;
