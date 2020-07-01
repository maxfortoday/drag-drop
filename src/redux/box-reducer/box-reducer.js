const INITIAL_STATE = {
  box: [
   {id:'1', completedTasks: []},
   {id:'2', completedTasks: []},
   {id:'3', completedTasks: []},
   {id:'4', completedTasks: []},
   {id:'5', completedTasks: []},
   {id:'6', completedTasks: []},
 ]
}

const boxesReducer = (state = INITIAL_STATE,action) => {
switch(action.type) {
 case 'SET_BOXES':
  return {
   ...state,
   boxes: action.payload
  }

case 'SET_NEW_BOX':
  return {
    ...state,
    ...action.payload
  }

 default: 
  return state;
}
}

export default boxesReducer;