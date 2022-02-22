import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useGlobalContext } from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useGlobalContext();

  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} {...item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       return <FeedbackItem key={item.id} {...item} removeItem={removeItem} />;
  //     })}
  //   </div>
  // );
}

export default FeedbackList;
