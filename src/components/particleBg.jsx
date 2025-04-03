import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 0.2 - 0.1; // Very slow horizontal movement
        this.vy = Math.random() * 0.2 - 0.1; // Very slow vertical movement
        this.size = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
      }
      
      update() {
        // Move particles
        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    // Create particles array
    const particles = [];
    const particleCount = Math.min(80, Math.max(40, canvas.width * canvas.height / 20000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Draw connecting lines between particles
    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance (closer = more opaque)
            const opacity = 0.15 * (1 - distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      // Clear canvas with transparent fill to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect particles with lines
      connectParticles();
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-dark-particle">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-70"
      />
    </div>
  );
};

export default NetworkBackground;