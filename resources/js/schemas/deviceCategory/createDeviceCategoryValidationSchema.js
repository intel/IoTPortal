import * as Yup from 'yup';

import { isDeviceCategoryNameUniqueDebounced } from '../../utils/utils';

const createDeviceCategoryValidationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .label('device category name')
      .required()
      .max(255)
      .test('isDeviceCategoryNameUnique', ({path}) => ({
        key: 'validation.unique',
        values: {attribute: path}
      }), isDeviceCategoryNameUniqueDebounced),
  });
};

export default createDeviceCategoryValidationSchema;