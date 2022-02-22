import React, { useState } from 'react';

function Card({ children, reverse }) {
  return <div className={`card ${reverse ? 'reverse' : null}`}>{children}</div>;
}

export default Card;
