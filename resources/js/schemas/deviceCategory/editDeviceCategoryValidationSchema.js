import * as Yup from 'yup';

const editDeviceCategoryValidationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .label('device category name')
      .required()
      .max(255),
  });
};

export default editDeviceCategoryValidationSchema;