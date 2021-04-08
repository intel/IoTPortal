export const convertDeviceObjectToDeviceArrayObject = object => {
  return Object.entries(object).map(([key, value], index) => {
      return {id: index, property: key, value: value};
    }
  );
}

export const removeObjectEmptyString = object => {
  Object.keys(object).forEach(key => object[key] === '' ? delete object[key] : {});
}

export const removeLastCharacterIfExists = (str, needle) => {
  if (needle && needle !== '') {
    if (str.slice(-1) === needle) {
      return str.slice(0, -1);
    }
  }
  return str;
}

export const getSanitizedValues = object => {
  const clonedObject = _.cloneDeep(object);

  Object.keys(clonedObject).forEach(key => {
    if (clonedObject[key] === '' || key === 'sota_option' || (Array.isArray(clonedObject[key]) && key === 'configurations' && !clonedObject[key][0].path)) {
      delete clonedObject[key];
    } else if (!Array.isArray(clonedObject[key]) && typeof clonedObject[key] === 'object' && clonedObject[key] !== null) {
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
}

