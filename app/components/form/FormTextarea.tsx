import React from 'react';
import { FormTextareaProps } from '@/app/lib/types';

const FormTextarea = ({ placeholder, name, register, error }: FormTextareaProps) => {
  return (
    <>
      <textarea placeholder={placeholder} {...register(name)} />
      {error && <span>{error.message}</span>}
    </>
  );
};

export default FormTextarea;
