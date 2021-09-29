/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { useEffect } from 'react';
import { setLocale } from 'yup';

// import yupLocale from '../locales/yupLocale';

// TODO: To be removed
const useYupLocale = () => {
  useEffect(() => {
    // setLocale(yupLocale);
  }, []);
};

export default useYupLocale;
