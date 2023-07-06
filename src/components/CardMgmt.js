import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

const CardMgmt = () => {
  // eslint-disable-next-line
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);
  const handleDrag = (e, ui) => {
    const { deltaX: x, deltaY: y } = ui;
    setPosition({ x, y });
  };

  const [isTouchActive, setIsTouchActive] = useState(false);

  useEffect(() => {
    const draggableNode = draggableRef.current;
  
    const handleTouchStart = (event) => {
      if (event.cancelable) {
        setIsTouchActive(true);
      }
    };
  
    const handleTouchEnd = () => {
      setIsTouchActive(false);
    };
  
    draggableNode.addEventListener('touchstart', handleTouchStart, { passive: true });
    draggableNode.addEventListener('touchend', handleTouchEnd, { passive: true });
  
    return () => {
      draggableNode.removeEventListener('touchstart', handleTouchStart);
      draggableNode.removeEventListener('touchend', handleTouchEnd);
    };
  }, [draggableRef]);
  

  return (
    <div className="flex justify-start">
      <Draggable cancel=".cancel-draggable" onDrag={handleDrag} nodeRef={draggableRef}>
        <div
          className={`bg-white border-2 rounded-lg border-gray-800 p-4 w-56 h-56 card2-draggable  md:h-64 md:w-64 lg:h-80 lg:w-80 ${isTouchActive ? 'touch-active' : ''
            }`}
          ref={draggableRef}
        >
          <svg
            className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          >
            <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z"></path>
          </svg>
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-black hover:underline md:text-xl md:mb-2 lg:text-4xl lg:mb-4">
            Project Management Tool
          </h5>
          <p className="mb-3 font-normal text-gray-500 md:text-sm md:mb-2 lg:text-base lg:mb-4">2022</p>
          <Link
            to="/mgmt"
            className="cancel-draggable inline-flex items-center text-blue-600 hover:underline md:text-sm lg:text-base"
          >
            See the guideline
            <svg
              className="w-5 h-5 ml-2 md:h-6 md:w-6 md:ml-1 lg:h-8 lg:w-8 lg:ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </Link>
        </div>
      </Draggable>
      <style>
        {`
          .card2-draggable {
            cursor: grab;
          }
          .card2-draggable:active {
            cursor: grabbing;
          }
          .card2-draggable:hover h5,
          .card2-draggable:hover h5 a,
          .card2-draggable:hover p,
          .card2-draggable:hover a,
          .card2-draggable:hover svg {
            color: rgb(253, 193, 38) !important;
          }
          .card2-draggable:hover {
            background-color: rgb(51, 51, 51);
          }
          .touch-active h5,
          .touch-active h5 a,
          .touch-active p,
          .touch-active a,
          .touch-active svg {
            color: rgb(253, 193, 38) !important;
          }
          .touch-active {
            background-color: rgb(51, 51, 51);
          }
          
        `}
      </style>
    </div>
  );
};

export default CardMgmt;