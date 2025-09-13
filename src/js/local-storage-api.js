export const saveInLs = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLs = key => {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    return parsedData;
  }
  return null;
};
