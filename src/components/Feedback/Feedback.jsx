import React from "react";
import styles from "./Feedback.module.css";


function Feedback({good, neutral, bad, positivePercentage}) {
    const total = good + neutral + bad;
    

    return (
     <div className={styles.feedback}>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positivePercentage}%</li>
        </ul>
     </div>
    )

}

export default Feedback;