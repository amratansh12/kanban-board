export const groupData = (data, grouping) => {
  const result = {};

  if (grouping === "user") {
    data.forEach((item) => {
      const key = item.user.name;

      if (!result[key]) {
        result[key] = [];
      } else {
        result[key].push(item);
      }
    });
  } else {
    data.forEach((item) => {
      const key = item[grouping];

      if (!result[key]) {
        result[key] = [];
      } else {
        result[key].push(item);
      }
    });
  }

  return result;
};
