import * as Yup from 'yup';

import { isDeviceNameUniqueDebounced } from '../../utils/utils';

const createDeviceValidationSchema = (deviceCategoryOptions) => {
  return Yup.object({
    name: Yup.string()
      .label('device name')
      .required()
      .max(255)
      .test('isDeviceNameUnique', ({path}) => ({
        key: 'validation.unique',
        values: {attribute: path}
      }), isDeviceNameUniqueDebounced),
    device_category: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('device category')
        .required()
        .oneOf(deviceCategoryOptions ? deviceCategoryOptions.map(({label}) => label) : [])
    }).nullable().required()
  });
};

export default createDeviceValidationSchema;