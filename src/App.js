import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';

//Data
import Feedbackdata from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);

  //* remove Items from list
  const removeItem = (id) => {
    if (window.confirm('Are you sure want to delete the item ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Feedbackstats feedback={feedback} />
        <FeedbackList feedback={feedback} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;
