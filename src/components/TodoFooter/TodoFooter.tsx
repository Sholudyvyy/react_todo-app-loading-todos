import classNames from 'classnames';
// eslint-disable-next-line max-len, prettier/prettier
import { TodoCompletedCategory as CompletedCategory } from '../../types/TodoCompletedCategory';

type Props = {
  countOfNotCompletedTodos: number;
  completedCategory: CompletedCategory;
  onCompletedCategory: React.Dispatch<React.SetStateAction<CompletedCategory>>;
};

const categoryForNav = {
  [CompletedCategory.active]: 'Active',
  [CompletedCategory.completed]: 'Completed',
  [CompletedCategory.all]: 'All',
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
        {Object.values(CompletedCategory).map(category => (
          <a
            key={category}
            href={`#/${category}`}
            className={classNames('filter__link', {
              selected: completedCategory === category,
            })}
            data-cy={`FilterLink${categoryForNav[category]}`}
            onClick={() => onCompletedCategory(category)}
          >
            {categoryForNav[category]}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={countOfNotCompletedTodos === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
