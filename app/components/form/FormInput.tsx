import React from 'react';
import { FormFieldProps } from '@/app/lib/types';

const FormInput = ({ type, placeholder, name, register, error }: FormFieldProps) => {
  return (
    <>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {error && <span>{error.message}</span>}
    </>
  );
};

export default FormInput;
