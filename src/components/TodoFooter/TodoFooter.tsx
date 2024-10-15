import classNames from 'classnames';
// eslint-disable-next-line max-len, prettier/prettier
import { TodoCompletedCategory as CompletedCategory } from '../../types/TodoCompletedCategory';

type Props = {
  countOfNotCompletedTodos: number;
  completedCategory: CompletedCategory;
  onCompletedCategory: React.Dispatch<React.SetStateAction<CompletedCategory>>;
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
            selected: completedCategory === CompletedCategory.all,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onCompletedCategory(CompletedCategory.all)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: completedCategory === CompletedCategory.active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onCompletedCategory(CompletedCategory.active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: completedCategory === CompletedCategory.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onCompletedCategory(CompletedCategory.completed)}
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
