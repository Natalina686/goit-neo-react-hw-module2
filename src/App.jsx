import { useEffect, useState } from "react";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";
import Description from "./components/Description/Description.jsx";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        good: Number(parsed.good) || 0,
        neutral: Number(parsed.neutral) || 0,
        bad: Number(parsed.bad) || 0,
      };
    }
    return { good: 0, neutral: 0, bad: 0 };
  });



  const handleFeedback = (type) => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,

    }))
  }

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback])

  return (
    <div className="container">
      <Description />
      
      <Options 
      onLeaveFeedback={handleFeedback} 
      onReset={handleReset}
      totalFeedback={totalFeedback}/>

      {totalFeedback === 0 ? (
        <Notification message={"No feedback yet"} />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          positivePercentage={positivePercentage}
        />
      )}


      
    </div>
  )
}
export default App;