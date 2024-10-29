export const sortData = (data, ordering) => {
  if (ordering === "priority") {
    for (const key in data) {
      data[key].sort((a, b) => {
        return b.priority - a.priority;
      });
    }

    return data;
  }

  if (ordering === "title") {
    for (const key in data) {
      data[key].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }

    return data;
  }
};
