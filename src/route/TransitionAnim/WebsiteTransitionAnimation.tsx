import TransitionSlideAnim from "./TransitionSlideAnim";

const WebsiteTransitionAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <TransitionSlideAnim />
      {children}
    </>
  );
};

export default WebsiteTransitionAnimation;
