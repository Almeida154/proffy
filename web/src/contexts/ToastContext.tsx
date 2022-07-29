import React, { useContext } from 'react';
import { Toaster, toast, ToastOptions } from 'react-hot-toast';

interface ToastProviderI {
  children: React.ReactNode;
}

type ToastContextType = {
  show: {
    error: (message: string) => void;
    success: (message: string) => void;
  };
};

const ToastContext = React.createContext<ToastContextType>(
  {} as ToastContextType
);

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<ToastProviderI> = ({
  children,
}) => {
  const TOAST_OPTIONS: ToastOptions = {
    duration: 4 * 1000, // 4 seconds
    position: 'top-center',
    ariaProps: {
      role: 'alert',
      'aria-live': 'polite',
    },
  };

  const show = {
    error: (message: string) => {
      toast.error(message, {
        ...TOAST_OPTIONS,
        className: 'proffy-toast error',
      });
    },
    success: (message: string) => {
      toast.success(message, {
        ...TOAST_OPTIONS,
        className: 'proffy-toast success',
      });
    },
  };

  return (
    <ToastContext.Provider value={{ show }}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  );
};
