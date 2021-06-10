import * as Yup from 'yup';

import { isDeviceJobNameUniqueDebounced } from '../../utils/utils';

const createDeviceJobValidationSchema = (deviceGroupOptions, savedCommandOptions) => {
  return Yup.object({
    name: Yup.string()
      .label('device job name')
      .required()
      .max(255)
      .test('isDeviceJobNameUnique', ({path}) => ({
        key: 'validation.unique',
        values: {attribute: path}
      }), isDeviceJobNameUniqueDebounced),
    device_group: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('device group')
        .required()
        .oneOf(deviceGroupOptions ? deviceGroupOptions.map(({label}) => label) : []),
    }).nullable().required(),
    saved_command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('saved command')
        .required()
        .oneOf(savedCommandOptions ? savedCommandOptions.map(({label}) => label) : []),
    }).nullable().required()
  });
};

export default createDeviceJobValidationSchema;
