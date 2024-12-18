
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import React, {useRef, useEffect} from 'react';
// import image from './assets/cursor_follow';


function App() {
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cursor = useRef(null);
  let h1 = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
  useEffect(() => {
    tl.to({},0.016,{
      repeat: -1,
      onRepeat: function(){
        posX += (mouseX-posX) / 10;
        posY += (mouseY-posY) / 10;
        tl.set(cursor,{
          css: {
            left: posX - 50,
            top: posY - 50,
          }
        })
      }
    })
    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;

    })
    tl2.from(h1.children,{
      skewY: 8,
      y: 100,
      duration: 2,
      delay: .3,
      opacity: 0,
      stagger: {
        each: .4,
        from: "end"
      }
    })
    tl2.from(cursor,{
      duration: 1.5,
      delay: 1,
      opacity: 0
    },"-=1")
  })

  return (
    <section className='bg-[#121212] overflow-hidden h-screen w-screen'>
     <div id="content" ref={el => h1 = el} className='absolute flex flex-col top-[100px] left-[100px]'>
      <h1 className='mb-1 text-9xl font-extrabold uppercase font-mono text-Primary-color cursor-crosshair'>Savage</h1>
      <h1 className='mb-1 text-9xl font-extrabold uppercase font-mono text-Primary-color cursor-crosshair'>Shady</h1>
      <h1 className='mb-1 text-9xl font-extrabold uppercase font-mono text-Primary-color cursor-crosshair'>Sensitive</h1>
     </div>
     <div id="cursor_follow" ref={el => cursor = el} className='absolute bg-cursorImage bg-cover bg-no-repeat bg-50% bg-50% w-[300px] h-[400px] z-2 select-none pointer-events-none transform translate-5px' ></div>
    </section>
  )
}

export default App
