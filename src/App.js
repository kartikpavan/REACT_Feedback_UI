import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';

//Data
import Feedbackdata from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);

  //* remove Item from Feedback list
  const removeItem = (id) => {
    if (window.confirm('Are you sure want to delete the item ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //* Add items to Feedback list
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Feedbackform addFeedback={addFeedback} />
        <Feedbackstats feedback={feedback} />
        <FeedbackList feedback={feedback} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;
