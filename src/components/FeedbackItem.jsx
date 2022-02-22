import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './cssComponent/Card';
import { useGlobalContext } from '../context/FeedbackContext';

function FeedbackItem({ id, rating, text }) {
  const { removeItem, editFeedback } = useGlobalContext();

  return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => removeItem(id)}>
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        color="purple"
        onClick={() => editFeedback({ id, rating, text })}
      >
        <FaEdit />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
