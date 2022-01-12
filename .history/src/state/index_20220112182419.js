const initialState = {list: [ {one: 1}, {two: 2} ]};

function reducer(state, action) {
   switch (action.type) {
     case 'increment':
      //  return {list: [state.count + 1]};
       return {list: [...state, action.payload]};
     case 'decrement':
      //  return {count: state.count - 1};
     default:
       throw new Error();
   }
 }

export const [state, dispatch] = useReducer(reducer, initialState);
