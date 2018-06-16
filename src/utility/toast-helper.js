export const findDocById = (array, value) => {
  const doc = array.map((doc, i) => {
      if (doc.id === value) {
          return array[i];
      } else {
          return null;
      }
  });
  return doc;
}
