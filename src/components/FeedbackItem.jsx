import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './cssComponent/Card';

function FeedbackItem({ id, rating, text, removeItem }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => removeItem(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
