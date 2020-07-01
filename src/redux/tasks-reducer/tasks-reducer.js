const INITIAL_STATE = {
  task: [
    {name:"html",category:"wip", bgcolor: "yellow"},
    {name:"css", category:"wip", bgcolor:"pink"},
    {name:"javascript", category:"wip", bgcolor:"skyblue"},
    {name:"react", category:"wip", bgcolor:"red"},
    {name:"Vue", category:"wip", bgcolor:"orange"},
    {name:"angular", category:"wip", bgcolor:"lightgreen"}
  ]
}

const tasksReducer = (state = INITIAL_STATE,action) => {
 switch(action.type) {
  case 'SET_TASKS':
   return {
    ...state,
    tasks: action.payload
   }

  default: 
   return state;
 }
}

export default tasksReducer;