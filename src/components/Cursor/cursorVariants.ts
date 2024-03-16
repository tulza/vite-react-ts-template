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
    StaticFollow: {
      opacity: 1,
      height: 0,
      width: 0,
      x: mouseXPosition + 40,
      y: mouseYPosition - 10,
      backgroundColor: "#fff0",
      fontSize: "20px",
      transition: {
        type: "easeIn",
        bounce: 0.3,
        duration: 0.1,
      },
    },
    Default: {
      opacity: 1,
      ...trackCursor(30),
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
      },
    },
    ReadMore: {
      opacity: 1,
      fontSize: "32px",
      backgroundColor: "#fff",
      ...trackCursor(100),
      transition: {
        type: "spring",
        mass: 1,
      },
      outline: "1px solid #000",
    },
    DisablePromt: {
      opacity: 1,
      fontSize: "24px",
      color: "#fff",
      backgroundColor: "#000",
      ...trackCursor(80),
      transition: {
        type: "spring",
        mass: 1,
      },
    },
    Square: {
      opacity: 1,
      fontSize: "24px",
      color: "#fff",
      backgroundColor: "#000",
      ...trackCursor(80),
      borderRadius: 10,
      transition: {
        type: "spring",
        mass: 1,
      },
    },
    Red: {
      opacity: 1,
      fontSize: "24px",
      backgroundColor: "#f00",
      ...trackCursor(80),
      borderRadius: 10,
      transition: {
        type: "spring",
        mass: 1,
      },
    },
  };
};
