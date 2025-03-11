'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Произошла ошибка:', error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-100">
      <h2 className="text-2xl font-bold text-red-600">Что-то пошло не так!</h2>
      <p className="text-gray-700">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Попробовать снова
      </button>
    </div>
  );
}
