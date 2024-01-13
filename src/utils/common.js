const render = (position, content) => {
  position.innerHTML = content();
};
export default render;
