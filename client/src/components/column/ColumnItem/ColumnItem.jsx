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

const cardsListStyles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const columnHeaderStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const ColumnItem = ({ columnId, name }) => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getCardsRequest(boardId));
  }, [boardId]);

  const [{isOver, canDrop}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ column: columnId }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return 'rgb(188,203,255)'
      } else if (!canDrop) {
        return 'rgb(255,188,188)'
      }
    } else {
      return '';
    }
  };

  return (
    <Paper style={{backgroundColor: getBackgroundColor()}} ref={drop}>
      <Box p={1} style={columnHeaderStyle}>
        <Title boardId={boardId} columnId={columnId} name={name}/>
        <ColumnRemove columnId={columnId}/>
      </Box>
      <Box style={cardsListStyles}>
        {cards && cards.filter(c => c.columnId === columnId).map((card, index) => (
          <Card key={card.id}
                name={card.name}
                cardId={card.id}
                index={index}
                columnId={columnId}
                columnName={name}
          />
        ))}
      </Box>
      <CardCreate columnId={columnId}/>
    </Paper>
  );
};

export default ColumnItem;
