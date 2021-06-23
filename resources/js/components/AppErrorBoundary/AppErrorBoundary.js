import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import PageError from '../PageError/PageError';

const AppErrorBoundary = (props) => {

  const {children, ...others} = props;

  return (
    <ErrorBoundary FallbackComponent={PageError} {...others}>
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;