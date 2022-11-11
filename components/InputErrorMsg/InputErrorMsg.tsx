import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { FieldError } from 'react-hook-form';

export const InputErrorMsg = ({
  error,
}: {
  error?: FieldError;
}): JSX.Element => {
  return (
    <>
      <span className="text-red-500 flex" role={error && 'alert'}>
        <ExclamationTriangleIcon
          className={`${error ? '' : 'hidden'} self-center h-5 w-5`}
          width={1}
        />
        &nbsp;
        <span>{error && error.message}</span>
      </span>
    </>
  );
};
