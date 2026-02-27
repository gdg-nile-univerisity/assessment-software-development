import React from "react";
import { useEffect } from "react";

function Pointer() {
    
    
      useEffect(() => {
      const dot = document.querySelector(".cursor-dot");
      const ring = document.querySelector(".cursor-ring");
    
      const moveCursor = (e) => {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
    
        setTimeout(() => {
          ring.style.left = e.clientX + "px";
          ring.style.top = e.clientY + "px";
        }, 50); // slight delay = echo vibe
      };
    
      window.addEventListener("mousemove", moveCursor);
    
      return () => window.removeEventListener("mousemove", moveCursor);
      }, []);
      

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </>
  );
}

export default Pointer;
