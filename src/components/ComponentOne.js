import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from "../redux/actions";

export default function ComponentOne() {

  const myCounter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <h1>React Counter With Redux</h1>
      <h2>First Component : {myCounter}</h2>
      <button onClick={() => dispatch(increase())}>Increase Counter</button>
      <button onClick={() => dispatch(decrease())}>Decrease Counter</button>
    </div>
  )
}
