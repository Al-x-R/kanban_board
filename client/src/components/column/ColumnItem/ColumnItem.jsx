import { useDrop } from 'react-dnd';
import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Title from '../Title/Title';
import Card from '../../card/Card/Card';
import { ItemTypes } from '../../../utils/items';
import ColumnRemove from '../ColumnRemove/ColumnRemove';
import { cardsSelector } from '../../../store/selectors';
import CardCreate from '../../card/CardCreate/CardCreate';
import { getCardsRequest } from '../../../store/actions/cardsAction';

const ColumnItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);
  const params = useParams();

  useEffect(() => {
    dispatch(getCardsRequest(params.id));
  }, [id]);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ column: id }),
  });

  return (
    <Paper style={{
      margin: '0 5px', border: '1px solid', borderRadius: '4px', display: 'flex', alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Box p={1} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title id={id} name={name}/>
        <ColumnRemove id={id}/>
      </Box>
      <Box ref={drop}>
        {cards && cards.filter(c => c.columnId === id).map((card, index) => (
          <Card key={card.id} name={card.name} id={card.id} index={index} columnId={id} columnName={name}/>
        ))}
      </Box>
      <CardCreate id={id}/>
    </Paper>
  );
};

export default ColumnItem;
