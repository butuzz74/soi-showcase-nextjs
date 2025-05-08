function LinkForNavBarMainPage({ children }: { children: string }) {
    return (
      <a
        href="#"
        className="text-white transition-all duration-200 hover:text-amber-300"
      >
        {children}
      </a>
    );
  }
  
  export default LinkForNavBarMainPage;
  