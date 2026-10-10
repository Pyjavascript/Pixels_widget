import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const PixelCursorImage = ({ 
  src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", 
  alt = "Cyberpunk Portrait" 
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 140 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    const DOT_SIZE = 3.5;       
    const GAP = 14;            
    const INFLUENCE_RADIUS = 150; 

    let animationFrameId;
    let dots = [];

    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.floor(width / GAP);
      const rows = Math.floor(height / GAP);

      const startX = (width - cols * GAP) / 2;
      const startY = (height - rows * GAP) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: startX + i * GAP,
            y: startY + j * GAP,
            currentAlpha: 0,
            targetAlpha: 0,
            scale: 0,
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);


    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(mouseRef.current, {
        x: x,
        y: y,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(mouseRef.current, {
        x: -1000,
        y: -1000,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      dots.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < INFLUENCE_RADIUS) {
          const power = 1 - distance / INFLUENCE_RADIUS;
          dot.targetAlpha = Math.pow(power, 1.5);
          dot.scale = power;
        } else {
          dot.targetAlpha = 0;
          dot.scale = 0;
        }

        dot.currentAlpha += (dot.targetAlpha - dot.currentAlpha) * 0.15;

        if (dot.currentAlpha > 0.01) {
          const size = DOT_SIZE * (0.6 + dot.scale * 0.4);
          
          ctx.fillStyle = `rgba(255, 255, 255, ${dot.currentAlpha.toFixed(2)})`;

          ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = dot.scale * 6;

          ctx.fillRect(
            dot.x - size / 2, 
            dot.y - size / 2, 
            size, 
            size
          );
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div 
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl shadow-2xl group  max-w-md w-full border border-white/10"
      >
        {/* Base Image */}
        <img 
          src={src} 
          alt={alt}
          className="w-full h-[550px] object-cover select-none pointer-events-none transition-transform duration-700 "
        />

        {/* Dynamic Pixel Overlay Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Ambient Gradient Overlay (Adds cinematic depth) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default PixelCursorImage;