import { ErrorBoundary } from 'react-error-boundary';

const GlobalError = ({ error }: any) => {
  return (
    <div>
      <h1>Global Error</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default function App({ Component, pageProps }: any) {
  return (
    <ErrorBoundary FallbackComponent={GlobalError}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
