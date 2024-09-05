'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { FormData, contactFormSchema } from '@/app/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import FormTextarea from './FormTextarea';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSendEmail = (data: any) => {
    console.log('Data');
    console.log(data);
  };

  return (
    <div className="">
      <form
        className="flex flex-col gap-4 lg:gap-6"
        onSubmit={handleSubmit(handleSendEmail)}
        noValidate
      >
        <FormInput
          name="name"
          register={register}
          type="text"
          error={errors.name}
          placeholder="Imię i nazwisko"
        />
        <FormInput
          name="email"
          register={register}
          type="email"
          error={errors.email}
          placeholder="Email"
        />
        <FormTextarea
          register={register}
          name="message"
          placeholder="Wiadomość"
          error={errors.message}
        />
        <ButtonPrimary type="submit" as="button">
          Wyślij
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default ContactForm;
