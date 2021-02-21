import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import ListSubheader from '@material-ui/core/ListSubheader';

import Card from '../../card/Card/Card';
import ColumnRemove from '../ColumnRemove/ColumnRemove';
import CardCreate from '../../card/CardCreate/CardCreate';
import { getCardsRequest } from '../../../store/actions/cardsAction';

const ColumnItem = ({ id, name }) => {
  const [toggle, setToggle] = useState(true)
  const dispatch = useDispatch();
  const columnHeader = {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', overflow: 'hidden',
  };

  const cards = useSelector(state => state.cards.data)
  console.group('Col item')
  console.log('item id ', id)
  console.log('item name ', name)
  console.log('cards ', cards)
  console.groupEnd()

  useEffect(() => {
    dispatch(getCardsRequest(id));
  }, [dispatch]);

  return (
    <div style={{
      border: '1px solid', borderRadius: '4px', maxWidth: '244px', display: 'flex',
      alignItems: 'center', flexDirection: 'column',
    }}>
      <List role="list" subheader={
        <ListSubheader component='div' style={columnHeader}>
          {name} <ColumnRemove id={id}/>
        </ListSubheader>}>
        {cards && cards.map(card => (
          <ListItem key={card.id} role="listitem" style={{ padding: '0', display: 'block' }}>
            <Card name={card.name}/>
          </ListItem>
        ))}
        <Divider/>
        <ListItem role="listitem" style={{ padding: '0' }}>
          <CardCreate id={id}/>
        </ListItem>
      </List>
    </div>

  );
};

export default ColumnItem;
