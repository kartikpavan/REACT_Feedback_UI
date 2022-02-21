import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

//Data
import Feedbackdata from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
