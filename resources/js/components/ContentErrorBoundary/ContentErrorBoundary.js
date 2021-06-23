import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ContentError from '../ContentError/ContentError';

const ContentErrorBoundary = (props) => {

  const {children, ...others} = props;

  return (
    <ErrorBoundary FallbackComponent={ContentError} {...others}>
      {children}
    </ErrorBoundary>
  );
};

export default ContentErrorBoundary;