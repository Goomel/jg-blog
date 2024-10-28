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

  const handleSendEmail = async (data: FormData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form
        className="flex flex-col justify-start gap-4 lg:gap-5"
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
