import React from "react";
import styles from "./Feedback.module.css";


function Feedback({good, neutral, bad}) {
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

    return (
     <div className={styles.feedback}>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positivePercentage}</li>
        </ul>
     </div>
    )
}

export default Feedback;