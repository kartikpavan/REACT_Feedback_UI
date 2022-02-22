import React, { useState } from 'react';
import Rating from './Rating';
import Card from './cssComponent/Card';
import Button from './cssComponent/Button';
import { useGlobalContext } from '../context/FeedbackContext';

function Feedbackform() {
  const { addFeedback } = useGlobalContext();

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);

  const inputChangeHandler = (e) => {
    setText(e.target.value);
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text Must be atleast 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: new Date().getTime().toString(),
        text: text,
        rating: rating,
      };
      addFeedback(newFeedback);
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your Experience with us?</h2>
        {/* Rating component */}
        <Rating select={(rating) => setRating(rating)} />
        {/* Input Fields */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={inputChangeHandler}
          />
          {/* Button Component */}
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message ? <div className="message">{message}</div> : null}
      </form>
    </Card>
  );
}

export default Feedbackform;
