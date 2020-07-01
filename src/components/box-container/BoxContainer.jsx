import React from 'react'
import './BoxContainer.css';
import Box from '../box/Box';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



const BoxContainer = ({boxes,setBox}) => {

 return (
  
  <div className="box-grid">
   <Box box={{...{...boxes[0]}}} setBox={setBox} as={Link} to="/box" linkid="1" />
   <Box box={{...{...boxes[1]}}} setBox={setBox} as={Link} to="/box" linkid="2" />
   <Box box={{...{...boxes[2]}}} setBox={setBox} as={Link} to="/box" linkid="3" />
   <Box box={{...{...boxes[3]}}} setBox={setBox} as={Link} to="/box" linkid="4" />
   <Box box={{...{...boxes[4]}}} setBox={setBox} as={Link} to="/box" linkid="5" />
   <Box box={{...{...boxes[5]}}} setBox={setBox} as={Link} to="/box" linkid="6" />
  </div>
 )
}


const mapStateToProps = state => ({
 boxes: state.boxes.box 
})

export default connect(mapStateToProps)(BoxContainer)