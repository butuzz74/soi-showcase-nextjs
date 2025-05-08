function PhoneNumber({ children, action }: { children: React.ReactNode, action: () => void }) {
  return <div onClick={action} className="flex justify-between items-center hover:cursor-pointer">{children}</div>;
}

export default PhoneNumber;
