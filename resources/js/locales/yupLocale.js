import { setLocale } from 'yup';

const yupLocale = {
  mixed: {
    default: '${path} is invalid.',
    required: ({path}) => ({key: 'validation.required', values: {attribute: path}}),
    oneOf: ({path}) => ({key: 'validation.in', values: {attribute: path}}),
    notOneOf: ({path}) => ({key: 'validation.not_in', values: {attribute: path}}),
    notType: '${path} must be a ${type} type.',
    defined: '${path} must be defined.',
  },
  string: {
    length: ({path, length}) => ({key: 'validation.size.string', values: {attribute: path, size: length}}),
    min: ({path, min}) => ({key: 'validation.min.string', values: {attribute: path, min}}),
    max: ({path, max}) => ({key: 'validation.max.string', values: {attribute: path, max}}),
    matches: ({path, regex}) => ({key: 'validation.regex', values: {attribute: path}}),
    email: ({path}) => ({key: 'validation.email', values: {attribute: path}}),
    url: ({path}) => ({key: 'validation.url', values: {attribute: path}}),
    uuid: ({path}) => ({key: 'validation.uuid', values: {attribute: path}}),
    trim: '${path} must be a trimmed string.',
    lowercase: '${path} must be a lowercase string.',
    uppercase: '${path} must be a upper case string.',
  },
  number: {
    min: ({path, min}) => ({key: 'validation.max.numeric', values: {attribute: path, value: min}}),
    max: ({path, max}) => ({key: 'validation.max.numeric', values: {attribute: path, value: max}}),
    lessThan: ({path, less}) => ({key: 'validation.lt.numeric', values: {attribute: path, value: less}}),
    moreThan: ({path, more}) => ({key: 'validation.gt.numeric', values: {attribute: path, value: more}}),
    positive: '${path} must be a positive number.',
    negative: '${path} must be a negative number.',
    integer: ({path}) => ({key: 'validation.integer', values: {attribute: path}}),
  },
  date: {
    min: ({path}) => ({key: 'validation.after', values: {attribute: path, date: min}}),
    max: ({path}) => ({key: 'validation.before', values: {attribute: path, date: max}}),
  },
  boolean: {
    isValue: ({path}) => ({key: 'validation.boolean', values: {attribute: path}}),
  },
  object: {
    noUnknown: '${path} field has unspecified keys: ${unknown}.',
  },
  array: {
    min: ({path, min}) => ({key: 'validation.min.array', values: {attribute: path, min}}),
    max: ({path, max}) => ({key: 'validation.max.array', values: {attribute: path, max}}),
    length: ({path, length}) => ({key: 'validation.size.array', values: {attribute: path, size: length}}),
  }
};

setLocale(yupLocale);