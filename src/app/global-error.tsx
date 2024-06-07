"use client";

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ReactNode } from 'react';

const GlobalError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h1>Global Error</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const GlobalErrorWrapper = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary FallbackComponent={GlobalError}>
    {children}
  </ErrorBoundary>
);

export default GlobalErrorWrapper;
