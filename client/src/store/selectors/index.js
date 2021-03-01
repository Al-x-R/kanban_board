export const userSelector = state => state.auth.user;
export const boardsSelector = state => state.boards.boards;
export const boardsStateSelector = state => state.boards;
export const currentBoardSelector = state => state.boards.currentBoard;
export const boardSelector = ({ boards: { boards, currentBoardIndex }, }) => boards[currentBoardIndex];
export const columnsSelector = state => state.columns.columns;
export const cardsSelector = state => state.cards.cards;
