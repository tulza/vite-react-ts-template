const Default = ["", "Default"];
const None = ["", "None"];
// const Follow = ["Following", "StaticFollow"];

export const pageLeave = () => {
  return ["", "None"];
};
export const pageEnter = () => {
  return Default;
};

export const readMoreEnter = () => {
  return ["Read More", "ReadMore"];
};
export const readMoreLeave = () => {
  return Default;
};

export const navigationEnter = () => {
  return None;
};

export const navigationExit = () => {
  return Default;
};

export const DisableCursorEnter = () => {
  return ["Disable", "DisablePromt"];
};
export const DisableCursorLeave = () => {
  return Default;
};

export const Square = () => {
  return ["", "Square"];
};

export const Red = () => {
  return ["", "Red"];
};
