import flatten from 'flat';
import { useEffect } from 'react';
import { useFormikContext } from 'formik';

// See path field isTocuhed to true using this patch so that errors would show up
// @see https://github.com/formium/formik/issues/445#issuecomment-677592750
const FormikPatchTouched = () => {
  const {errors, setFieldTouched, isSubmitting, isValidating} = useFormikContext();
  useEffect(() => {
    if (isSubmitting && !isValidating) {
      for (const path of Object.keys(flatten(errors))) {
        setFieldTouched(path, true, false);
      }
    }
  }, [errors, isSubmitting, isValidating, setFieldTouched]);
  return null;
};

export default FormikPatchTouched;