'use client';

import { register } from '@/app/lib/actions/register/action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const formFields = [
    {
      label: "Nom d'utilisateur",
      name: 'username',
      placeholder: 'Ex: JohnDoe',
      type: 'text',
      value: formData.username,
      errors: errors.username
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Entrez votre adresse email',
      type: 'email',
      value: formData.email,
      errors: errors.email
    },
    {
      label: 'Mot de passe',
      name: 'password',
      placeholder: 'Entrez votre mot de passe',
      type: 'password',
      value: formData.password,
      errors: errors.password
    },
    {
      label: 'Confirmez le mot de passe',
      name: 'passwordConfirm',
      placeholder: 'Confirmez votre mot de passe',
      type: 'password',
      value: formData.passwordConfirm,
      errors: errors.passwordConfirm
    },
    {
      label: 'Rôle',
      name: 'role',
      placeholder: 'Ex: Admin ou Utilisateur',
      type: 'text',
      value: formData.role,
      errors: errors.role
    }
  ];

  const fieldSchemas = {
    username: z.string().min(5, {
      message: "Le nom d'utilisateur doit avoir au moins 5 caractères"
    }),
    email: z.string().email({
      message: 'Veuillez entrer une adresse email valide'
    }),
    password: z
      .string()
      .min(8, {
        message: 'Le mot de passe doit avoir au moins 8 caractères'
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
        message: 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'
      }),
    passwordConfirm: z
      .string()
      .min(8, {
        message: 'Le mot de passe doit avoir au moins 8 caractères'
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
        message: 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'
      }),
    role: z.string().nonempty({
      message: 'Veuillez spécifier un rôle'
    })
  };

  const schema = z
    .object({
      username: fieldSchemas.username,
      email: fieldSchemas.email,
      password: fieldSchemas.password,
      passwordConfirm: fieldSchemas.passwordConfirm,
      role: fieldSchemas.role
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: 'Les mots de passe ne correspondent pas',
      path: ['passwordConfirm']
    });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (value === '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      return;
    }

    try {
      await fieldSchemas[name as keyof RegisterFormData].parseAsync(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (err: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: err.errors[0]?.message || ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.parseAsync(formData);

      const response = await register(formData);
      console.log('API Response:', response);

      // Vérifier si la réponse contient le message de succès
      if (response.message === 'Utilisateur ajouté avec succès') {
        toast.success(response.message);
        router.push('/');
      } else {
        toast.error("Erreur lors de la création de l'utilisateur");
      }
    } catch (error: any) {
      if (error.errors) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error('Oups, une erreur est survenue');
      }
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Créer un compte utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-6">
              {formFields.map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={field.value}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                  />
                  {errors[field.name] && (
                    <span className="mt-1 text-sm text-red-500" id="error_input">
                      {errors[field.name]}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition transform hover:-translate-y-1 hover:shadow-lg focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Créer
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
