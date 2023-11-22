import React, { useRef } from "react";
import { motion } from "framer-motion";

const CustomizeButton = ({children}) => {
  const buttonRef = useRef(null);
  const itemRef = useRef(null);

  const handleMouseEnter = (event) => {
    buttonRef.current.classList.add("animate");

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonX = event.clientX - buttonRect.left;
    const buttonY = event.clientY - buttonRect.top;

    if (buttonY < 24) {
      itemRef.current.style.top = 0 + "px";
    } else if (buttonY > 30) {
      itemRef.current.style.top = 48 + "px";
    }

    itemRef.current.style.left = buttonX + "px";
    itemRef.current.style.width = "1px";
    itemRef.current.style.height = "1px";
  };

  const handleMouseLeave = () => {
    buttonRef.current.classList.remove("animate");

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonX = event.clientX - buttonRect.left;
    const buttonY = event.clientY - buttonRect.top;

    if (buttonY < 24) {
      itemRef.current.style.top = 0 + "px";
    } else if (buttonY > 30) {
      itemRef.current.style.top = 48 + "px";
    }
    itemRef.current.style.left = buttonX + "px";
  };

  return (
    <>
      <style>{`
        .primary-button {
          position: relative;
          border: 2px solid white;
          border-radius: 500px;
          width: 250px;
          height: 48px;
          overflow: hidden;
          background-color: transparent;
          text-transform: uppercase;
          color: white;
          font-size: 14px;
          font-weight: 700;
        }

        .primary-button:hover {
          border: 2px solid rgb(224,36,36);
        }

        .primary-button .round {
          border-radius: 50%;
          background-color: rgb(224,36,36);
          position: absolute;
          top: 5px;
          left: 10px;
          z-index: -1;
          animation: scale-down 0.2s forwards;
        }

        .primary-button.animate .round {
          animation: scale-up 0.5s forwards;
        }

        @keyframes scale-up {
          to {
            transform: scale(600);
          }
        }

        @keyframes scale-down {
          from {
            transform: scale(600);
          }
          to {
            transform: scale(0);
          }
        }
      `}</style>
      <motion.div
        ref={buttonRef}
        className="primary-button hover:text-white flex justify-center items-center transition duration-200 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
        <motion.span
          className="round absolute"
          ref={itemRef}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      </motion.div>
    </>
  );
};

export default CustomizeButton;
