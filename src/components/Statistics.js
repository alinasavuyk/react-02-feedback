import React from "react";
const Statistics =({good, bad, neutral,total,positiveFeedback})=>(
    <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total:{total} </li>
        <li>Positive Feedback: {positiveFeedback}%</li>
    </ul>
)
export default Statistics