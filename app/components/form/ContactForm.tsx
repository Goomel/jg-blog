'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { FormData, contactFormSchema } from '@/app/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '@/app/lib/resend';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Loader from './Loader';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSendEmail = async (data: FormData) => {
    try {
      await sendEmail(data.name, data.email, data.message);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success('Wiadomość została wysłana');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Nie udało się wysłać wiadomości.');
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
          {isSubmitting ? (
            <>
              <Loader />
              Wysyłanie...
            </>
          ) : (
            'Wyślij wiadomość'
          )}
        </ButtonPrimary>
      </form>
      <Toaster position="bottom-center" richColors />
    </div>
  );
};

export default ContactForm;
