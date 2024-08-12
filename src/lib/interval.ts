// TODO: NOT WORKING!
export const useInterval = (action: () => void, delay: number = 1000) => {
  setInterval(() => action, delay);
};
