import React from 'react';
import cn from 'classnames';
import { FormTextareaProps } from '@/app/lib/types';
import FormErrorMessage from './FormErrorMessage';

const FormTextarea = ({ placeholder, name, register, error }: FormTextareaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        autoComplete="off"
        className={cn(
          error ? 'border-red-600' : 'border-black-300',
          'h-36 min-h-24 rounded border bg-black-400 px-3 py-2 text-gray-100 focus:outline-0 lg:p-4',
        )}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </div>
  );
};

export default FormTextarea;
