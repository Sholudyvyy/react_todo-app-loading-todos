/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todo: Todo;
};

export const TodoTask: React.FC<Props> = ({ todo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-cy="Todo"
      className={classNames('todo', { 'todo completed': todo.completed })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      {/* This form is shown instead of the title and remove button */}
      {false && (
        <form>
          <input
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            value="Todo is being edited now"
          />
        </form>
      )}

      <button
        type="button"
        className={classNames('todo__remove', {
          hidden: !isHovered,
        })}
        data-cy="TodoDelete"
      >
        ×
      </button>

      {/* overlay will cover the todo while it is being deleted or updated */}
      {/* 'is-active' class puts this modal on top of the todo */}
      <div data-cy="TodoLoader" className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
