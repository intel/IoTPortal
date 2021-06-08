import * as Yup from 'yup';

import { AOTA_APP_OPTIONS, AOTA_REBOOT_OPTIONS } from '../../data/options';

const aotaValidationSchema = (commandOptions, isFieldHidden) => {
  const validationObject = {
    app: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('application')
        .required()
        .oneOf(AOTA_APP_OPTIONS.map(({label}) => label))
    }).nullable().required(),
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('command')
        .required()
        .oneOf(commandOptions.map(({label}) => label))
    }).nullable().required()
  };

  if (!isFieldHidden.tag) validationObject.tag = Yup.string().label('container tag').required();

  if (!isFieldHidden.reboot) {
    validationObject.reboot = Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('device reboot')
        .required()
        .oneOf(AOTA_REBOOT_OPTIONS.map(({label}) => label))
    }).nullable().required();
  }

  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().label('fetch link').required();
  if (!isFieldHidden.signature) validationObject.signature = Yup.string().label('signature').required();

  if (!isFieldHidden.version) {
    validationObject.version = Yup.string()
      .label('version')
      .when(['app', 'command'], {
        is: (app, command) => app.value === 'docker' && command.value === 'remove',
        then: Yup.string().required(),
        otherwise: Yup.string(),
      });
  }

  if (!isFieldHidden.server_username) validationObject.server_username = Yup.string().label('server username');
  if (!isFieldHidden.server_password) validationObject.server_password = Yup.string().label('server password');
  if (!isFieldHidden.docker_registry) validationObject.docker_registry = Yup.string().label('docker registry');
  if (!isFieldHidden.docker_username) validationObject.docker_username = Yup.string().label('docker username');
  if (!isFieldHidden.docker_password) validationObject.docker_password = Yup.string().label('docker password');
  if (!isFieldHidden.docker_compose_file) validationObject.docker_compose_file = Yup.string().label('docker compose file');

  return Yup.object(validationObject);
};

export default aotaValidationSchema;