export const groupBy = (groups) => {
  const groupObj = groups.reduce((group, item) => {
    const { date } = item;
    group[date] = group[date] ?? [];
    group[date].push(item);
    return group;
  }, {});

  return Object.entries(groupObj);
};
