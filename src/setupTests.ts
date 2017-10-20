// Removes warning about requestAnimationFrame dependency
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
