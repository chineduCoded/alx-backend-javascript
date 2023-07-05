export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || typeof set !== 'object' || !set.size) {
    return '';
  }

  let cleanedValues = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (cleanedValues.length > 0) {
        cleanedValues += '-';
      }
      cleanedValues += value.slice(startString.length);
    }
  }

  return cleanedValues;
}
