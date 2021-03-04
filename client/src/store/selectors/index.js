export const userSelector = state => state.auth.user;
export const boardsListSelector = state => state.boards.boards;
export const currentBoardSelector = state => state.boards.currentBoard;
export const currentBoardIndex = state => state.boards.currentBoardIndex;
export const columnsSelector = state => state.columns.columns;
export const cardsSelector = state => state.cards.cards;
export const boardActivities = state => state.activities.boardActivities;
export const cardActivities = state => state.activities.cardActivities;
