function NoticeBlock({
  errorNumber,
  titleNotice,
  textNotice,
}: {
  errorNumber: number;
  titleNotice: string;
  textNotice: string;
}) {
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">{errorNumber}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          {titleNotice}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {textNotice}
        </p>
      </div>
    </div>
  );
}

export default NoticeBlock;
