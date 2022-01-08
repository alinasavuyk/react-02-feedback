import React from "react";

const FeedbackOptions =({onLeaveFeedback, options})=>{
    return <div>  
       {options.map(option=>{
            return(
            <button key={option}
             type="button" 
             onClick={() => onLeaveFeedback(option)}>{option}</button>
            )})} 
    </div>
}
export default FeedbackOptions