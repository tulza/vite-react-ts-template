export const mouseVariant = (
  mouseXPosition: number,
  mouseYPosition: number,
) => {
  const trackCursor = (size: number) => {
    return {
      height: size,
      width: size,
      x: mouseXPosition - size / 2,
      y: mouseYPosition - size / 2,
    };
  };

  return {
    None: {
      opacity: 0,
      ...trackCursor(0),
      backgroundColor: "#fff0",
      fontSize: "0px",
    },
    Default: {
      opacity: 1,
      ...trackCursor(30),
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    ReadMore: {
      opacity: 1,
      fontSize: "32px",
      backgroundColor: "#fff",
      ...trackCursor(100),
      transition: {
        type: "spring",
        mass: 0.2,
      },
      outline: "1px solid #000",
    },
  };
};
