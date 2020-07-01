import React from 'react'
import './Box.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Box = ({tasks,linkid,history,match,box:{completedTasks,id},setBox}) => {

 const onDragOver = (ev) => {
  ev.preventDefault();
 }
 
 const onDrop = (ev, cat) => {
 let name = ev.dataTransfer.getData("id");

 tasks.filter((task) => {
     if (task.name === name) {
        task.category = cat;
         
     }
     
     return task;
 }); 
  setBox(id,name)
 
}

const completeUrl = () => history.push(`/box${match.url}${linkid}`)
const boxUrl = history.location.pathname.includes('box')

  return ( 
   <div 
   linkid={linkid} 
   onClick={boxUrl ? void(0) : completeUrl}    
   className="box-container"  onDragOver={(e)=>onDragOver(e)}
   onDrop={(e)=>onDrop(e, "complete")}>
  {
  tasks.map((item) => { 
   if(completedTasks.includes(item.name)) {
    let div = <div key={item.name} 
        onDragOver={(e)=>onDragOver(e)}
        onDrop={(e)=>onDrop(e, "complete")}
           className="droppable"
           style = {{backgroundColor: item.bgcolor}}
       >
           {item.name}
       </div>
       return div
      }
  })}
   </div>
 )
}

const mapStateToProps = state => ({
    tasks: state.tasks.task
  })

export default connect(mapStateToProps)(withRouter(Box))