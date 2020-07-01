import React from 'react'
import './Menu.css';
import {connect} from 'react-redux';

const Menu = ({tasks}) => {
 
 const onDragStart = (ev, id) => {
  ev.dataTransfer.setData("id", id);
}

  var dummyTasks = {
   wip: [],
   complete: []
 }

 tasks.forEach ((t) => {
  dummyTasks[t.category].push(
      <div key={t.name} 
          onDragStart = {(e) => onDragStart(e, t.name)}
          draggable
          className="draggable"
          style = {{backgroundColor: t.bgcolor}}
      >
          {t.name}
      </div>
  );
});

  return (
   <div className="menu-container wip">{dummyTasks.wip}</div>
  )
}

const mapStateToProps = state => ({
  tasks: state.tasks.task 
})

export default connect(mapStateToProps)(Menu)
