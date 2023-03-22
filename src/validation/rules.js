const rules = {
  regexp: (value, regexp, label) => {
    if (regexp === undefined) {
      return true;
    }
    const pattern = new RegExp(regexp);
    return pattern.test(value) || `Invalid ${label}, use: ${regexp}`;
  },
  unique: (value, isUnique, list = []) => {
    if (isUnique) {
      const index = list.findIndex((item) => item === value);
      const newList = [...list]
      newList.splice(index, 1);

      return !newList.includes(value) || `Value ${value} is not unique`;
    } else {
      return true;
    }
  },
  isValidEnum: (value, enumList) => {
    return enumList.includes(value) || `Invalid value ${value}`;
  },
  requied: (v) => {
    return !!v || 'Required field';
  },
};

export { rules };
