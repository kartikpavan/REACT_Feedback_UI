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
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //* Add items to Feedback list
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  //* grabbing the feedback item that we want to edit
  const editFeedback = (item) => {
    console.log(item);
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //* Updating the grabbed Feedback Item
  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
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
