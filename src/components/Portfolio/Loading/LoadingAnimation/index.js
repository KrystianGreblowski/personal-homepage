import { animated, useSpring } from "react-spring";

const LoadingAnimation = () => {
  const { rotation } = useSpring({
    rotation: 360,
    from: { rotation: 0 },
    loop: true,
  });

  return (
    <animated.svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotation.to((r) => `rotate(${r}deg)`),
      }}
    >
      <g id=".icon-spinner">
        <circle
          id="Ellipse 1"
          cx="80"
          cy="80"
          r="74.3125"
          stroke="#D1D5DA"
          strokeOpacity="0.3"
          strokeWidth="11.375"
        />
        <path
          id="Ellipse 2"
          d="M132.547 27.4531C146.483 41.3894 154.312 60.2911 154.312 80C154.313 99.7089 146.483 118.611 132.547 132.547"
          stroke="#0366D6"
          strokeWidth="11.375"
        />
      </g>
    </animated.svg>
  );
};

export default LoadingAnimation;
