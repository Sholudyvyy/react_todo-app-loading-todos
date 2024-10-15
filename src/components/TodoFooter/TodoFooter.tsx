import classNames from 'classnames';
import { TodoCompletedCategory } from '../../types/TodoCompletedCategory';

type Props = {
  countOfNotCompletedTodos: number;
  completedCategory: TodoCompletedCategory;
  // eslint-disable-next-line max-len, prettier/prettier
  onCompletedCategory: React.Dispatch<React.SetStateAction<TodoCompletedCategory>>;
};

export const TodoFooter: React.FC<Props> = ({
  countOfNotCompletedTodos,
  completedCategory,
  onCompletedCategory,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {countOfNotCompletedTodos} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: completedCategory === TodoCompletedCategory.all,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onCompletedCategory(TodoCompletedCategory.all)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: completedCategory === TodoCompletedCategory.active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onCompletedCategory(TodoCompletedCategory.active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: completedCategory === TodoCompletedCategory.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onCompletedCategory(TodoCompletedCategory.completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={countOfNotCompletedTodos !== 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
