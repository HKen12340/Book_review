import { createStore } from "redux";

const initialState = {
  flag: false,
};

const reducer = (state = initialState, actoin) => {
  switch(actoin.type){
    case 'LOGIN':
      return{
        flag: state.flag = true
      };
    case 'LOGOUT':
      return{
        flag: state.flag = false
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;