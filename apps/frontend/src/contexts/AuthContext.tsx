import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextValue {
  initData: string | null;
  setInitData: (data: string) => void;
}

const AuthContext = createContext<AuthContextValue>({ initData: null, setInitData: () => {} });

function getRawInitData(): string | null {
  if (typeof window === 'undefined') return null;

  if (window.Telegram?.WebApp?.initData) {
    return window.Telegram.WebApp.initData;
  }

  const hash = window.location.hash.replace(/^#/, '');
  const search = window.location.search.replace(/^\?/, '');
  for (const source of [hash, search]) {
    if (!source) continue;
    const prefix = 'tgWebAppData=';
    const idx = source.indexOf(prefix);
    if (idx !== -1) {
      const rest = source.slice(idx + prefix.length);
      // The initData value is a query string; it is URL-encoded as a whole.
      // Stop at the next unencoded '&' that belongs to the outer URL.
      const end = rest.indexOf('&');
      const encoded = end === -1 ? rest : rest.slice(0, end);
      try {
        return decodeURIComponent(encoded);
      } catch {
        return encoded;
      }
    }
  }

  return localStorage.getItem('gcat_initData');
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initData, setInitData] = useState<string | null>(() => getRawInitData());

  useEffect(() => {
    const data = getRawInitData();
    if (data) {
      setInitData(data);
      localStorage.setItem('gcat_initData', data);
    }
  }, []);

  const handleSet = (data: string) => {
    setInitData(data);
    localStorage.setItem('gcat_initData', data);
  };

  return (
    <AuthContext.Provider value={{ initData, setInitData: handleSet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData: string;
      };
    };
  }
}
