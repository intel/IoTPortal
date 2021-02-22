export const convertDeviceObjectToDeviceArrayObject = object => {
  return Object.entries(object).map(([key, value], index) => {
        return {id: index, property: key, value: value};
    }
  );
}


