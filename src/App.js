import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
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
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Feedbackform addFeedback={addFeedback} />
                  <Feedbackstats feedback={feedback} />
                  <FeedbackList feedback={feedback} removeItem={removeItem} />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </>
  );
}

export default App;
