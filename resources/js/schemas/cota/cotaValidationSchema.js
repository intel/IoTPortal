import * as Yup from 'yup';

import { COTA_COMMAND_OPTIONS, COTA_CONFIGURATION_PATH_OPTIONS } from '../../data/options';

const cotaValidationSchema = (isFieldHidden) => {
  const validationObject = {
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('command')
        .required()
        .oneOf(COTA_COMMAND_OPTIONS.map(({label}) => label))
    }).nullable().required()
  };

  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().label('fetch link').required();

  if (!isFieldHidden.configurations) {
    validationObject.configurations = Yup.array().of(
      Yup.object().shape({
        path: Yup.object()
          .label('configuration path')
          .required()
          .shape({
            value: Yup.string().required(),
            label: Yup.string()
              .required()
              .oneOf(COTA_CONFIGURATION_PATH_OPTIONS.map(({label}) => label))
          })
          .nullable()
          .test('uniqueConfigurationPath', ({path}) => ({
            key: 'validation.unique',
            values: {attribute: path}
          }), function (value) {
            const configurationsArr = this.from[2].value.configurations.map(configuration => (configuration.path ? configuration.path.value : null)).filter(Boolean);
            return value ? configurationsArr.reduce((accumulator, currentValue) => accumulator + (currentValue === value.value), 0) < 2 : true;
          }),
        // Using .test() instead of .when() because of accessing parent schema not possible in current Yup version
        // https://github.com/jquense/yup/issues/225#issuecomment-692315453
        value: Yup.string()
          .label('configuration value')
          .test('configurationValueRequired', ({path}) => ({
            key: 'validation.required',
            values: {attribute: path}
          }), function (value) {
            return this.from[1].value.command === null ? true : (this.from[1].value.command.value === 'set') ?
              Yup.string().required().isValidSync(value) : true;
          })
      })
    ).required();
  }

  if (!isFieldHidden.signature) validationObject.signature = Yup.string().label('signature').required();

  return Yup.object(validationObject);
};

export default cotaValidationSchema;