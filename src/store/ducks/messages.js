import { createActions, createReducer } from "reduxsauce";

/**
 * Criando os action types e os creators
 */
export const { Types, Creators } = createActions({
  addMessage: ["text"],
  removeMessage: ["id"]
});

console.log(Types, Creators);

/**
 * Criandoos reducer handlers
 */
const INITIAL_STATE = [
  { id: 1, text: "mensagem 1" },
  { id: 2, mensagem: "mensagem dois" }
];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  {
    id: Math.random(),
    text: action.text
  }
];

const remove = (state = INITIAL_STATE, action) => {
  return state.filter(message => message.id !== action.id);
};

/**
 * Criando reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_MESSAGE]: add,
  [Types.REMOVE_MESSAGE]: remove
});
