import * as Yup from 'yup';

const createSavedCommandValidationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .label('command name')
      .required()
      .max(255),
  });
};

export default createSavedCommandValidationSchema;