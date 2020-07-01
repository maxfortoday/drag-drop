import React from 'react';
import './App.css';
import {Route, useLocation} from 'react-router-dom';
import Header from './components/header/Header';
import BoxContainer from './components/box-container/BoxContainer';
import Menu from './components/menu/Menu';
import Box from './components/box/Box';
import {newBox} from './redux/box-reducer/box-actions'
import {connect} from 'react-redux';

const App = ({boxes,newBox}) => {  

  let location = useLocation();
  let url = location.pathname.split('/')[2] -1;

  const setBox = (boxId, taskId) => {    
    const filteredBoxes = boxes.map((box) => {
      return box.id === boxId ? { ...box, completedTasks: [...box.completedTasks, taskId] } : box
    })    

    newBox({
      box: filteredBoxes
    })

  }

      
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={() => <BoxContainer setBox={(boxId, taskId) => setBox(boxId, taskId)}  />} />
        <div className="homepage">
          <Route path="/box" component={() => <Menu/>} />
          <Route path='/box/:boxId' component={() => <Box setBox={(boxId, taskId) => setBox(boxId, taskId)} box={{...{...boxes[url]}}} /> } />
        </div>
      </div>
    );

}

const mapStateToProps = state => ({
  boxes: state.boxes.box 
 })

const mapDispatchToProps = dispatch => ({
  newBox: currentState => dispatch(newBox(currentState))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
