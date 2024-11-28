import React from 'react';
import cn from 'classnames';
import { FormFieldProps } from '@/app/lib/types';
import FormErrorMessage from './FormErrorMessage';

const FormInput = ({ type, placeholder, name, label, register, error }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      {type === 'checkbox' && label ? (
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type={type}
            {...register(name)}
            className={cn(
              error ? 'border-red-500' : 'border-black-300',
              'rounded border bg-black-400 text-gray-100 focus:outline-0',
            )}
          />
          <span className="text-xs text-gray-100 sm:text-sm">{label}</span>
        </label>
      ) : (
        <input
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={cn(
            error ? 'border-red-500' : 'border-black-300',
            'rounded border bg-black-400 px-3 py-2 text-gray-100 focus:outline-0 lg:p-4',
          )}
        />
      )}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </div>
  );
};

export default FormInput;
