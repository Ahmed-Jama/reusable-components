import React, { createContext, useEffect, useState } from "react";

type NavigationContextValue = {
  currentPath: string;
  navigate: (to: string) => void;
};

const NavigationContext = createContext<NavigationContextValue>({
  currentPath: "/",
  navigate: () => {},
});

interface NavigationProps {
  children: React.ReactNode;
}

const NavigationProvider: React.FC<NavigationProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname,
  );

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to: string): void => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
