import { ReactNode } from 'react';

export {};

declare global {
  interface ErrorResponse {
    message: string;
    field?: string;
  }

  interface ContextProvider {
    children?: ReactNode;
  }
}
