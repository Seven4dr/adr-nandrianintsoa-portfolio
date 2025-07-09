import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import "./CircularText.css";

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  radius = 60,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  const animateRotation = (duration, scaleVal = 1) => {
    const start = rotation.get();

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: {
        rotate: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  };

  useEffect(() => {
    animateRotation(spinDuration);
  }, [spinDuration, text, onHover]);

  const handleHoverStart = () => {
    if (!onHover) return;

    let duration = spinDuration;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        duration = spinDuration * 2;
        break;
      case "speedUp":
        duration = spinDuration / 4;
        break;
      case "pause":
        duration = 100000; // simulate pause
        break;
      case "goBonkers":
        duration = spinDuration / 20;
        scaleVal = 0.8;
        break;
      default:
        duration = spinDuration;
    }

    animateRotation(duration, scaleVal);
  };

  const handleHoverEnd = () => {
    animateRotation(spinDuration);
  };

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{
        position: "relative",
        width: `${radius * 2 + 40}px`,
        height: `${radius * 2 + 40}px`,
        display: "inline-block",
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (2 * Math.PI * i) / letters.length;
        const x = Math.cos(angle - Math.PI / 2) * radius + radius + 20;
        const y = Math.sin(angle - Math.PI / 2) * radius + radius + 20;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%) rotate(${(360 / letters.length) * i}deg)`,
              transformOrigin: "center",
              whiteSpace: "pre",
              fontWeight: "bold",
              fontSize: "1.1em",
              letterSpacing: "1px",
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
