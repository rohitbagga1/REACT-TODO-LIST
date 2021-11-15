import React from "react";

export default function Preventchar(props){

 const charCount = 500 - props.inputData.length;  
 const style = {
     float: "right"
 } 
    return (
<div style={style}><p>Character Limit {charCount}</p></div>
    );
} 