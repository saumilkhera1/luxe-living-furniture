import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Counter tick logic
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        // Trigger GSAP exit animations
        const tl = gsap.timeline({
          onComplete: onComplete
        });

        tl.to(progressRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.inOut"
        })
          .to(textRef.current?.querySelectorAll(".char") || [], {
            opacity: 0,
            y: -50,
            stagger: 0.05,
            duration: 0.6,
            ease: "power3.in"
          }, "-=0.3")
          .to(containerRef.current, {
            yPercent: -100,
            duration: 1.0,
            ease: "power4.inOut"
          }, "-=0.2");
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Entrance animations for characters
  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 1.0,
          ease: "power4.out"
        }
      );
    }
  }, []);

  const brandName = "LUXELIVING";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#FAF9F6] z-[9999] flex flex-col items-center justify-center select-none"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Brand Logo Reveal */}
      <div
        ref={textRef}
        className="flex space-x-[0.5rem] md:space-x-[1.5rem] text-[2rem] md:text-[4rem] font-light tracking-[0.4em] text-black overflow-hidden"
      >
        {brandName.split("").map((char, index) => (
          <span key={index} className="char inline-block font-sans font-extralight">
            {char}
          </span>
        ))}
      </div>

      {/* Progress Indicator */}
      <div
        ref={progressRef}
        className="absolute bottom-24 flex flex-col items-center space-y-4"
      >
        <span className="font-mono text-sm tracking-widest text-[#777777]">
          DESIGNING LUXURY {progress.toString().padStart(3, "0")}%
        </span>
        
        {/* Progress Bar Container */}
        <div className="w-[180px] h-[1px] bg-[#EAEAEA] overflow-hidden relative rounded-full">
          <div
            className="h-full bg-black transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
