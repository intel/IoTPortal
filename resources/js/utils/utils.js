export const convertDeviceObjectToDeviceArrayObject = object => {
  return Object.entries(object).map(([key, value], index) => {
        return {id: index, property: key, value: value};
    }
  );
}

export const removeObjectEmptyString = object => {
  Object.keys(object).forEach(key => object[key] === "" ? delete object[key] : {});
}



