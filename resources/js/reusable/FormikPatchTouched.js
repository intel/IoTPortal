import flatten from 'flat';
import { useEffect } from 'react';
import { useFormikContext } from 'formik';

// https://github.com/formium/formik/issues/445#issuecomment-677592750
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