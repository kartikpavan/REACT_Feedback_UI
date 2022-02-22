import React, { useContext, useState } from 'react';
import Feedbackdata from '../data/FeedbackData';

const FeedbackContext = React.createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(Feedbackdata);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

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

  //* Set Item to be Updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //*Update Feedback Item
  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...item, ...upditem };
        }
        return item;
      })
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        removeItem,
        addFeedback,
        updateFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FeedbackContext);
};

export { FeedbackContext, FeedbackProvider };
