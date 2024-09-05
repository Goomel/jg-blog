'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    name: {
      required: 'Imię i nazwisko jest wymagane',
      minLength: {
        value: 3,
        message: 'Minimalna wartość to 3',
      },
    },
    email: { required: 'Email jest wymagany' },
    message: {
      required: 'Wiadomość jest wymagana',
    },
  };

  const handleErrors = (errors: any) => {
    console.log('Errors');
    console.log(errors);
  };
  const handleSendEmail = (data: any) => {
    console.log('Data');
    console.log(data);
  };

  return (
    <div className="">
      <form
        className="flex flex-col gap-4 lg:gap-6"
        onSubmit={handleSubmit(handleSendEmail, handleErrors)}
      >
        <input
          {...register('name', registerOptions.name)}
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
        />
        {errors?.name && typeof errors.name.message === 'string' ? (
          <p>{errors.name.message}</p>
        ) : null}
        <input
          {...register('email', registerOptions.email)}
          type="text"
          name="email"
          placeholder="Email"
        />
        {errors?.email && typeof errors.email.message === 'string' ? (
          <p>{errors.email.message}</p>
        ) : null}
        <textarea
          {...register('message', registerOptions.message)}
          name="message"
          placeholder="Wiadomość"
        ></textarea>
        {errors?.message && typeof errors.message.message === 'string' ? (
          <p>{errors.message.message}</p>
        ) : null}
        <button type="submit">Wyslij</button>
      </form>
    </div>
  );
};

export default ContactForm;
