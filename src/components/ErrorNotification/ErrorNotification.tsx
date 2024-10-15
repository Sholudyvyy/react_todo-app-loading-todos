import React from 'react';
import { Errors } from '../../types/Errors';
import classNames from 'classnames';

type Props = {
  errorMessage: Errors;
  onErrorMessage: React.Dispatch<React.SetStateAction<Errors>>;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  onErrorMessage,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: errorMessage === Errors.noneError },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => onErrorMessage(Errors.noneError)}
      />
      {errorMessage}
    </div>
  );
};
