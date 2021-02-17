import React, { useEffect, useState } from 'react';
import CardCreate from '../../card/CardCreate/CardCreate';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ColumnRemove from '../ColumnRemove/ColumnRemove';
import Card from '../../card/Card/Card';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { getCardsRequest } from '../../../store/actions/cardsAction';

const ColumnItem = ({ id, name }) => {
  const [toggle, setToggle] = useState(true)
  const dispatch = useDispatch();
  const divStyle = {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', overflow: 'hidden',
  };
  const cards = useSelector(state => state.cards.cards)

  useEffect(() => {
    dispatch(getCardsRequest(id));
  }, [dispatch]);

  if (!cards) return null

  return (
    <div style={{
      border: '1px solid', borderRadius: '4px', maxWidth: '244px', display: 'flex',
      alignItems: 'center', flexDirection: 'column',
    }}>
      <List role="list" subheader={
        toggle ?
        <ListSubheader onDoubleClick={() => {
          setToggle(false)
        }} component='div' style={divStyle}>
          {name} <ColumnRemove id={id}/>
        </ListSubheader> : <TextField id="standard-basic" />}>
        {cards.map(card => (
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
