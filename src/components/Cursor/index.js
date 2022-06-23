// import React, { useRef } from "react";


// const Cursor = () => {
//     const delay = 18;
//     const cursorVisible = useRef(true);
//     const cursorEnlarged = useRef(false);
//     const dotOutline = useRef(null);
//     const dot = useRef(null);
//     const list = useRef(null);

//     const endX = useRef(window.innerWidth / 2);
//     const endY = useRef(window.innerHeight / 2);
//     const _x = useRef(0);
//     const _y = useRef(0);
//     const requestRef = useRef(null);
//     const toggleCursorVisibility = () => {
//         if (cursorVisible.current) {
//             dot.current.style.opacity = 1;
//             dotOutline.current.style.opacity = 1;
//         } else {
//             dot.current.style.opacity = 0;
//             dotOutline.current.style.opacity = 0;
//         }
//     }

//     const toggleCursorSize = () => {
//         if (cursorEnlargeed.current) {
//             dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
//             dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
//         } else {
//             dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
//             dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
//         }
//     }

//     const mouseOverEvent = () => {
//         cursorEnlarged.current = true;
//         toggleCursorSize()
//     }

//     const mouseOutEvent = () => {
//         cursorEnlarged.current = false;
//         toggleCursorSize()
//     }

//     const mouseEnterEvent = () => {
//         cursorVisible.current = true;
//         toggleCursorVisibility()
//     }

//     const mouseLeaveEvent = () => {
//         cursorVisible.current = false;
//         toggleCursorVisibility()
//     }

//     const mouseMoveEvent = (e) => {
//         cursorVisible.current = true;
//         toggleCursorVisibility()
//         endX.current = e.pageX;
//         endY.current = e.pageY;
//         dot.current.style.top = endY.current + 'px';
//         dot.current.style.left = endX.current + 'px';
//     }
//     const animateDotOutline = () => {
//         _x.current += (endX.current - _x.current) / delay;
//         _y.current += (endY.current - _y.current) / delay;
//         dotOutline.current.style.top = _y.current + 'px';
//         dotOutline.current.style.left = _x.current + 'px';

//         requestRef.current = requestAnimationFrame(animateDotOutline);

//     }
//     function coordinate(x, y, timestamp) {
//         this.x = x,
//             this.y = y,
//             this.timestamp = timestamp;
//     }

//     const animateDotOutline = timestamp => {
//         _x.current += (endX.current - _x.current) / delay;
//         _y.current += (endY.current - _y.current) / delay;
//         coordinates.push(new coordinate(_x.current, _y.current, timestamp))
//         dotOutline.current.style.top = _y.current + 'px';
//         dotOutline.current.style.left = _x.current + 'px';

//         if (Math.floor(_x.current) !== Math.floor(endX.current) &&
//             Math.ceil(_x.current) !== Math.ceil(endX.current)) {
//             requestRef.current = requestAnimationFrame(animateDotOutline)
//         } else if (
//             Math.floor(_x.current) === Math.floor(endX.current) ||
//             Math.ceil(_x.current) === Math.ceil(_x.current)) {
//             console.table(coordinates)
//         }
//     }

//     return (
//         <>
//             <div ref={dotOutline} className='cursor-dot-outline'></div>
//             <div ref={dot} className='cursor-dot'></div>
//             <div ref={list} className="links-container">
//                 { }
//             </div>


//         </>
//     )
// }

// export default Cursor; 