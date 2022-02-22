import React, { useState } from 'react';

function Rating({ select }) {
  const [selected, setSelected] = useState(5);

  const changeHandler = (e) => {
    setSelected(+e.currentTarget.value); //* plus is added to change it from STRING TO NUMBER
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={changeHandler}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={changeHandler}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={changeHandler}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={changeHandler}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={changeHandler}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
    </ul>
  );
}

export default Rating;
