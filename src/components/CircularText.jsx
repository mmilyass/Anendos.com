import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300
  }
});

const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '' }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: getRotationTransition(spinDuration, start)
    });
  }, [spinDuration, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    switch (onHover) {
      case 'slowDown':
        transitionConfig = getRotationTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getRotationTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = { rotate: { duration: 0 } };
        break;
      case 'goBonkers':
        transitionConfig = getRotationTransition(spinDuration / 20, start);
        break;
      default:
        transitionConfig = getRotationTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: getRotationTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full w-50 h-50 relative text-white text-center cursor-pointer origin-center ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i;
        const transform = `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`;

        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 text-2xl"
            style={{
              transform,
              transformOrigin: "center center"
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
