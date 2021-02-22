import React from 'react';
import Spinner from '../Spinner/Spinner';

const WithSpinner = WrappedComponent => ({ loading, ...otherProps }) => {
  return loading ? (
    <Spinner/>
  ) : (
    <WrappedComponent {...otherProps}/>
  )
}

export default WithSpinner;
