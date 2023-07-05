const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
};

export default cleanSet;
