import React, {useEffect, useState, useRef } from 'react';
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import Draggable from 'react-draggable';

const Card1 = () => {
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
    <div >
      <Draggable onDrag={handleDrag} cancel=".cancel-draggable" nodeRef={draggableRef} >
        <div className={`group bg-white border-2 rounded-lg border-gray-800 p-4 card1-draggable cursor-grab hover:bg-sky-400  active:cursor-grabbing w-56 h-56 md:h-56 md:w-64 lg:h-80 lg:w-80 ${isTouchActive ? 'card1-touch-active' : ''
            }`} ref={draggableRef}>
          {/* <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
         
            <h5 className={`mb-2 text-lg font-semibold tracking-tight text-black group-hover:text-white lg:text-4xl hover:underline ${
              isTouchActive ? 'text-white' : ''}`}>Coming Soon</h5>
         
          {/* <p className={`mb-3 font-normal text-gray-500 group-hover:text-white ${
              isTouchActive ? 'text-white' : ''}`}>Follow this step-by-step guideline on how to certify for your weekly benefits:</p>
          <Link to="/project1" className={`inline-flex items-center text-blue-600 hover:underline md:text-sm lg:text-base group-hover:text-white ${
              isTouchActive ? 'text-white' : ''}`}>
            See our guideline
            <svg className={`w-5 h-5 ml-2 md:h-6 md:w-6 md:ml-1 lg:h-8 lg:w-8 lg:ml-2 group-hover:text-white ${
              isTouchActive ? 'text-white' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          </Link> */}
        </div>
      </Draggable>
      <style>{`
      .card1-touch-active{
        background-color:deepskyblue;
      }
      
      `}</style>
    </div>
  );
};

export default Card1;
