import React from 'react';
import { FormFieldProps } from '@/app/lib/types';

const FormInput = ({ type, placeholder, name, register, error }: FormFieldProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="border-b border-black-400 px-1 py-2 focus:border-b-lemon-500 focus:outline-0 lg:px-2 lg:py-3"
      />
      {error && <span>{error.message}</span>}
    </>
  );
};

export default FormInput;
