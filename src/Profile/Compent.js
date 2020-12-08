import React from 'react'
import PropTypes from "prop-types";
const Compent = (props) => {
    var stylde = {color :"#62DAFB",textAlign:"center"}
    return ( 
        <>
         <h1 style={stylde}>{props.fullName}</h1> 
        <h1 style={stylde}>{props.bio} </h1> 
        <h1 style={stylde}>{props.profession}</h1>
        <button onClick={()=>props.handelName(props.fullName)}>clickme</button>
        {props.children}
        </>

    )
} ; 
Compent.defaultProps = {
    fullName: "wissem par default" ,
  };
  Compent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };
export default Compent