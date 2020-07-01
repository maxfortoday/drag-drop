import {combineReducers} from 'redux'
import tasksReducer from './tasks-reducer/tasks-reducer';
import boxesReducer from './box-reducer/box-reducer';

export default combineReducers({
 tasks: tasksReducer,
 boxes: boxesReducer
})