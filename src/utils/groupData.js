export const groupData = (data, grouping) => {
  const result = {};

  data.forEach((item) => {
    const key = item[grouping];

    if (!result[key]) {
      result[key] = [];
    } else {
      result[key].push(item);
    }
  });

  return result;
};
