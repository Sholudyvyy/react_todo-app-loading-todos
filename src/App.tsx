import React, { useEffect, useState } from 'react';
import { getTodos } from './api/todos';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList/TodoList';
import { TodoFooter } from './components/TodoFooter/TodoFooter';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
// eslint-disable-next-line max-len
import { ErrorNotification } from './components/ErrorNotification/ErrorNotification';
import { TodoCompletedCategory } from './types/TodoCompletedCategory';
import { filterTodosByComplated } from './utils/filterTodosByCompleted';
import { Errors } from './types/Errors';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtredTodos, setFiltredTodos] = useState<Todo[]>([]);
  const [completedCategory, setCompletedCategory] =
    useState<TodoCompletedCategory>(TodoCompletedCategory.all);
  const [countOfNotCompletedTodos, setCountOfNotCompletedTodos] = useState(0);
  const [errorMessage, setErrorMessage] = useState<Errors>(Errors.noneError);

  async function setTodosFromApi() {
    try {
      const todosFromApi = await getTodos();

      setTodos(todosFromApi);
    } catch {
      setErrorMessage(Errors.loadError);
    }
  }

  useEffect(() => {
    setTodosFromApi();
  }, []);

  useEffect(() => {
    setFiltredTodos(filterTodosByComplated(todos, completedCategory));
  }, [todos, completedCategory]);

  useEffect(() => {
    setCountOfNotCompletedTodos(todos.filter(todo => !todo.completed).length);
  }, [todos]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage(Errors.noneError);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [errorMessage]);

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <TodoHeader isAllTodosCompleted={countOfNotCompletedTodos === 0} />
        {todos.length !== 0 && (
          <>
            <TodoList todos={filtredTodos} />
            <TodoFooter
              countOfNotCompletedTodos={countOfNotCompletedTodos}
              completedCategory={completedCategory}
              onCompletedCategory={setCompletedCategory}
            />
          </>
        )}
      </div>

      <ErrorNotification
        errorMessage={errorMessage}
        onErrorMessage={setErrorMessage}
      />
    </div>
  );
};
