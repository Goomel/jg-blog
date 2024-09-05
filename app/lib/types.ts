import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod';

export type MenuItem = {
  title: string;
  href: string;
};

export type Menu = MenuItem[];

export enum HamburgerVariant {
  Open = 'open',
  Close = 'close',
}

export type Post = {
  title: string;
  publishedAt: string;
  excerpt: string;
  category: string;
  thumbnail: string;
  description: string;
  slug: string;
  content: string;
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type FormFieldNames = 'name' | 'email' | 'message';

export type FormFieldProps = {
  type: string;
  placeholder?: string;
  name: FormFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type FormTextareaProps = Omit<FormFieldProps, 'type'>;

export const contactFormSchema: ZodType<FormData> = z.object({
  name: z.string().min(3, 'Wpisz poprawne imię i nazwisko'),
  email: z.string().email('Wpisz poprawny adres email'),
  message: z.string().min(12, 'Wiadomość musi mieć conajmniej 10 znaków'),
});
