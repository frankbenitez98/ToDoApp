import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onCompleted }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#99FF90' : 'antiquewhite'}
      onClick={onCompleted}
    />
  );
}

export { CompleteIcon };