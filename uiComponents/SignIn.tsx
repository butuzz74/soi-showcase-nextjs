'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { Toast } from './Toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const loginSchema = z.object({
  email: z.string().email('Введите корректный email'),
  password: z.string().min(6, 'Пароль должен быть минимум 6 символов'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function SignIn() {
  const [data, setData] = useState<LoginFormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormData, string>>
  >({});
  const [errorAuth, setErrorAuth] = useState<string | null>(null);
  const [touched, setTouched] = useState<
    Partial<Record<keyof LoginFormData, boolean>>
  >({});
  const [eyeActive, setEyeActive] = useState<boolean>(false);
  const router = useRouter();

  const validateField = (name: keyof LoginFormData, value: string) => {
    const singleFieldSchema = loginSchema.pick({ [name]: true } as {
      [K in keyof LoginFormData]: true;
    });
    const result = singleFieldSchema.safeParse({ [name]: value });
    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? '' : result.error.format()[name]?._errors[0],
    }));
  };

  const handleBlur = (name: keyof LoginFormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, data[name]);
  };

  const handleChange = (name: keyof LoginFormData, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const isSubmitDisabled = !!errors.email || !!errors.password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(data);
    if (!result.success) {
      const formatted = result.error.format();
      setErrors({
        email: formatted.email?._errors[0],
        password: formatted.password?._errors[0],
      });
      return;
    }

    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (res?.error && res?.code) {
      switch (res.code) {
        case 'MISSING_FIELDS':
          setErrorAuth('Заполните все поля!');
          break;
        case 'USER_NOT_FOUND':
          setErrorAuth('Пользователь с таким email не найден');
          break;
        case 'INVALID_PASSWORD':
          setErrorAuth('Неверный пароль');
          break;
        default:
          setErrorAuth('Ошибка входа, попробуйте снова');
      }
    } else {
      router.back();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className="mt-2 w-full rounded-md border bg-indigo-600 px-3 py-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Пароль
          </label>
          <div className="relative mt-2 w-full">
            <input
              type={eyeActive ? 'text' : 'password'}
              id="password"
              value={data.password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              className="w-full rounded-md border bg-indigo-600 px-3 py-2 pr-10 text-white"
            />
            <div
              onClick={() => setEyeActive((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white"
            >
              {eyeActive ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`w-full rounded-md px-4 py-2 text-white ${
            isSubmitDisabled
              ? 'bg-gray-400'
              : 'bg-indigo-600 hover:bg-indigo-500'
          }`}
        >
          Войти
        </button>
      </form>
      {errorAuth && (
        <Toast message={errorAuth} onClose={() => setErrorAuth(null)} />
      )}
    </>
  );
}
