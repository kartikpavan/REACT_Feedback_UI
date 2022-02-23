import React, { useContext, useState, useEffect } from 'react';

const FeedbackContext = React.createContext();

const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //* fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    );
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchFeedback();
  }, []);

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
        loading,
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
