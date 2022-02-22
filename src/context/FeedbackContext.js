import React, { useContext, useState } from 'react';
import Feedbackdata from '../data/FeedbackData';

const FeedbackContext = React.createContext();

const FeedbackProvider = ({ children }) => {
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
    <FeedbackContext.Provider value={{ feedback, removeItem, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FeedbackContext);
};

export { FeedbackContext, FeedbackProvider };
