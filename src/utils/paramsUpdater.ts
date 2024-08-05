export const paramsUpdater = (
  obj: Record<string, unknown>
): Record<string, unknown> => {
  const filteredObject: Record<string, unknown> = {};

  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== 0 && obj[key] !== "") {
      filteredObject[key] = obj[key];
    }
  }

  return filteredObject;
};
