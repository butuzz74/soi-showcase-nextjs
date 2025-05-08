"use client"

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">Произошла ошибка!</h1>
        <p className="mt-2">Что-то пошло не так. Мы работаем над исправлением.</p>
        <p className="mt-4 text-sm text-gray-500">{error.message}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => window.location.reload()}
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
