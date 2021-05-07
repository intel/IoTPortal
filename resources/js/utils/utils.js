import { CButton } from '@coreui/react';
import toast from 'react-hot-toast';
import { API_ENDPOINT } from '../data/config';

export const convertDeviceObjectToDeviceArrayObject = object => {
  return Object.entries(object).map(([key, value], index) => {
      return {id: index, property: key, value: value};
    }
  );
};

export const removeObjectEmptyString = object => {
  Object.keys(object).forEach(key => object[key] === '' ? delete object[key] : {});
};

export const removeLastCharacterIfExists = (str, needle) => {
  if (needle && needle !== '') {
    if (str.slice(-1) === needle) {
      return str.slice(0, -1);
    }
  }
  return str;
};

export const isNotEmptyString = (str) => {
  return Boolean(str);
}

export const isValidJSONObject = (obj) => {
  return typeof obj === 'object' && obj !== null;
};

export const isValidJsonString = (str) => {
  if (str === null) return false;
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const getSanitizedValues = object => {
  const clonedObject = _.cloneDeep(object);

  Object.keys(clonedObject).forEach(key => {
    if (clonedObject[key] === '' || key === 'sota_option' || (Array.isArray(clonedObject[key]) && key === 'configurations' && !clonedObject[key][0].path)) {
      delete clonedObject[key];
    } else if (!Array.isArray(clonedObject[key]) && typeof clonedObject[key] === 'object' && clonedObject[key] !== null && clonedObject[key].label) {
      clonedObject[key] = clonedObject[key].value;
    } else if (Array.isArray(clonedObject[key]) && key === 'configurations') {
      let configurationsString = '';
      clonedObject[key].forEach(value => {
        if (value.value) {
          configurationsString += `${value.path.value}:${value.value};`;
        } else {
          configurationsString += `${value.path.value};`;
        }
      });
      clonedObject[key] = removeLastCharacterIfExists(configurationsString, ';');
    }
  });
  return clonedObject;
};

export const formatDateTimeISOStringToCommonString = dateTimeISOString => {
  const dt = new Date(dateTimeISOString);
  return `${dt.getFullYear().toString().padStart(4, '0')}-${
    (dt.getMonth() + 1).toString().padStart(2, '0')}-${
    dt.getDate().toString().padStart(2, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;
};

export const formatDateTimeRangeToCommonString = (dateTimeRangeArr) => {
  return `${dateTimeRangeArr[0].getFullYear().toString().padStart(4, '0')}-${
    (dateTimeRangeArr[0].getMonth() + 1).toString().padStart(2, '0')}-${
    dateTimeRangeArr[0].getDate().toString().padStart(2, '0')} ${
    dateTimeRangeArr[0].getHours().toString().padStart(2, '0')}:${
    dateTimeRangeArr[0].getMinutes().toString().padStart(2, '0')}:${
    dateTimeRangeArr[0].getSeconds().toString().padStart(2, '0')} - ${
    dateTimeRangeArr[1].getFullYear().toString().padStart(4, '0')}-${
    (dateTimeRangeArr[1].getMonth() + 1).toString().padStart(2, '0')}-${
    dateTimeRangeArr[1].getDate().toString().padStart(2, '0')} ${
    dateTimeRangeArr[1].getHours().toString().padStart(2, '0')}:${
    dateTimeRangeArr[1].getMinutes().toString().padStart(2, '0')}:${
    dateTimeRangeArr[1].getSeconds().toString().padStart(2, '0')}`
}

export const filterDateTimeRange = (value, filter) => {
  if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
    return true;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return value === formatDateTimeRangeToCommonString(filter);
};

export const toastHelper = {
  loading: (message) => {
    return toast.loading(message, {
      style: {
        minWidth: '500px',
      },
    });
  },
  success: (message, toastId) => {
    return toast.success(<b>{message}</b>, {
      id: toastId,
      style: {
        minWidth: '500px',
      },
    });
  },
  error: (message, toastId) => {
    return toast.error((t) => (
      <span>
            <b>{message}</b>
            <CButton
              onClick={() => toast.dismiss(t.id)}
              color="primary"
              size="sm"
              className="m-2"
            >
              Dismiss
            </CButton>
          </span>
    ), {
      id: toastId,
      style: {
        minWidth: '500px',
      },
    });
  },
};

export const truncateToStringEllipsis = (str) => {
  if (typeof str === 'string' || str instanceof String) {
    return _.truncate(str, {
      'length': 40,
    });
  }
  return null;
};

export const redirectToAfterToastSuccess = (history, location) => {
  setTimeout(() => {
    history.push(location)
  }, 2000)
};

export const isDeviceNameUnique = (name) => new Promise((resolve, reject) => {
  axios.post(`${API_ENDPOINT}/devices/validateField`, {name: name})
    .then(result => {
      if (result.data.success)
        resolve(true);
      else
        resolve(false);
    })
    .catch(error => {
      resolve(false);
    });
});

export const isDeviceGroupNameUnique = (name) => new Promise((resolve, reject) => {
  axios.post(`${API_ENDPOINT}/device/groups/validateField`, {name: name})
    .then(result => {
      if (result.data.success)
        resolve(true);
      else
        resolve(false);
    })
    .catch(error => {
      resolve(false);
    });
});

export const isDeviceCategoryNameUnique = (name) => new Promise((resolve, reject) => {
  axios.post(`${API_ENDPOINT}/device/categories/validateField`, {name: name})
    .then(result => {
      if (result.data.success)
        resolve(true);
      else
        resolve(false);
    })
    .catch(error => {
      resolve(false);
    });
});

export const isJobNameUnique = (name) => new Promise((resolve, reject) => {
  axios.post(`${API_ENDPOINT}/jobs/validateField`, {name: name})
    .then(result => {
      if (result.data.success)
        resolve(true);
      else
        resolve(false);
    })
    .catch(error => {
      resolve(false);
    });
});

