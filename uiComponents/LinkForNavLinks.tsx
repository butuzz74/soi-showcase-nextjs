function LinkForNavLinks({ children }: { children: string }) {
  return (
    <a
      href="#"
      className="rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

export default LinkForNavLinks;
