function IconForSocial({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={`${href}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default IconForSocial;
