function IconForSocial({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={`${href}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
      {children}
    </a>
  );
}

export default IconForSocial;
