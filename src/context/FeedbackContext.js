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

  //* Add items to Feedback list
  const addFeedback = async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //* remove Item from Feedback list
  const removeItem = async (id) => {
    await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'DELETE',
    });
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //* Updating the grabbed Feedback Item
  const updateFeedback = async (id, upditem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upditem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  //* grabbing the feedback item that we want to edit
  const editFeedback = (item) => {
    console.log(item);
    setFeedbackEdit({
      item,
      edit: true,
    });
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
