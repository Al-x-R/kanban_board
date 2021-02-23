import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import { useParams } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import ListSubheader from '@material-ui/core/ListSubheader';

import Title from '../Title/Title';
import Card from '../../card/Card/Card';
import ColumnRemove from '../ColumnRemove/ColumnRemove';
import { cardsSelector } from '../../../store/selectors';
import CardCreate from '../../card/CardCreate/CardCreate';
import { getCardsRequest } from '../../../store/actions/cardsAction';

const ColumnItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);
  const params = useParams();

  const columnHeader = {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', overflow: 'hidden',
  };

  useEffect(() => {
    dispatch(getCardsRequest(params.id));
  }, [id]);

  return (
    <div style={{
      border: '1px solid', borderRadius: '4px', maxWidth: '244px', display: 'flex',
      alignItems: 'center', flexDirection: 'column',
    }}>
      <List role="list" subheader={
        <ListSubheader component='div' style={columnHeader}><Title id={id} name={name}/>
          <ColumnRemove id={id}/>
        </ListSubheader>}>
        {cards && cards.filter(c => c.columnId === id).map((card, index) => (
          <ListItem key={card.id} role="listitem" style={{ padding: '5px ', display: 'block' }}>
            <Card name={card.name} id={card.id}/>
          </ListItem>
        ))}
        {/*<Divider/>*/}
        <ListItem role="listitem" style={{ padding: '0' }}>
          <CardCreate id={id}/>
        </ListItem>
      </List>
    </div>

  );
};

export default ColumnItem;
