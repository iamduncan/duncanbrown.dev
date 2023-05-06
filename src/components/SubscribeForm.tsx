'use client';
import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error, message } = await res.json();
    if (error) {
      setIsSuccess(false);
      setMessage(message);
    } else {
      setIsSuccess(true);
      setMessage(message);
    }
    reset();
  };

  return (
    <div className="mx-10">
      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: 'none' }}
          {...register('botcheck')}
        />

        <div className="mb-5">
          <input
            type="text"
            placeholder="First Name"
            autoComplete="false"
            className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
              errors.name
                ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
            }`}
            {...register('name', {
              required: 'First name is required',
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message as ReactNode}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            autoComplete="false"
            className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
              errors.email
                ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
            }`}
            {...register('email', {
              required: 'Enter your email',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message as ReactNode}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="mx-auto rounded-md bg-gray-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black "
        >
          {isSubmitting ? (
            <svg
              className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-center text-sm text-green-500">
          {message || 'Success. Message sent successfully'}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-center text-sm text-red-500">
          {message || 'Something went wrong. Please try later.'}
        </div>
      )}
    </div>
  );
}
