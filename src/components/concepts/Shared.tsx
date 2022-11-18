type Wrapper = {
  children: React.ReactNode;
};

export const ConceptPanel = ({ children }: Wrapper) => {
  return (
    <div className="not-prose rounded-lg border-2 border-light-gray bg-pale py-3 px-5 dark:border-gray dark:bg-black">
      {children}
    </div>
  );
};

export const Code = ({ children }: Wrapper) => {
  return (
    <pre className="flex overflow-auto text-base md:text-lg lg:text-xl">
      {children}
    </pre>
  );
};
