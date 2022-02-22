import React from 'react';

function Feedbackstats({ feedback }) {
  //* calculate average rating for all feedback
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //*removing decimal places
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>

      <h4>Avg Rating : {feedback.length > 0 ? average : 0}</h4>
    </div>
  );
}

export default Feedbackstats;
