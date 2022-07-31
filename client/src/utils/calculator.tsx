export const findPercentage = (max: number, current: number): number => {
  return JSON.parse(((100 / max) * current).toFixed(0));
};
