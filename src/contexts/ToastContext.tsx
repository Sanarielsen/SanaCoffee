import { createContext, ReactNode, useContext, useState } from 'react';

import { Toast } from '@globalComponents/Toast';
import { TypeComponent } from '@globalTypes/TypeComponent';

type ToastData = {
  id: number;
  message: string;
  type: TypeComponent;
};

interface ToastContextProps {
  addToastMessage: (type: TypeComponent, message: string) => void;
  removeToastMessage: (id: number) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps,
);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToastMessage = (type: TypeComponent, message: string) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, type, message }]);
    setTimeout(() => removeToastMessage(id), 2500 + toasts.length * 2500);
  };

  const removeToastMessage = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToastMessage, removeToastMessage }}>
      {children}
      {toasts.map((toast, key) => (
        <Toast
          key={toast.id}
          order={key}
          type={toast.type}
          message={toast.message}
          onCloseToast={() => removeToastMessage(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
}

export const useToastService = () => {
  return useContext(ToastContext);
};
