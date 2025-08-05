"use client"
import { useEffect, useRef } from "react"

const Marquee = () => {
  const marqueeRef = useRef(null)
  const marqueeRef2 = useRef(null)

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = "marquee1 20s linear infinite"
    }
    if (marqueeRef2.current) {
      marqueeRef2.current.style.animation = "marquee2 18s linear infinite"
    }
  }, [])

  const marqueeContent1 = (
    <>
      <span className="mx-8 text-white font-extrabold">NANDRIANINTSOA</span>
      <span className="mx-8 text-white font-extrabold">@NANDRIANINTSOA</span>
      <span className="mx-6 text-4xl text-white font-extrabold">•</span>
      <span className="mx-8 text-white font-extrabold">OPEN TO OPPORTUNITIES</span>
      <span className="mx-8 font-extrabold text-white">{"LET'S COLLABORATE"}</span>
      <span className="mx-6 text-4xl text-white font-extrabold">•</span>
    </>
  )

  const marqueeContent2 = (
    <>
      <span className="mx-8 text-white font-extrabold">FULLSTACK DEVELOPER</span>
      <span className="mx-8 text-white font-extrabold">JAVASCRIPT & PYTHON</span>
      <span className="mx-6 text-4xl text-white font-extrabold">•</span>
      <span className="mx-8 text-white font-extrabold">AI SOLUTIONS</span>
      <span className="mx-8 text-white font-extrabold">BUSINESS INTELLIGENCE</span>
      <span className="mx-8 font-extrabold text-white">WEB PERFORMANCE</span>
      <span className="mx-6 text-4xl text-white font-extrabold">•</span>
    </>
  )

  return (
    <>
      <style>
        {`
          @keyframes marquee1 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes marquee2 {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          .marquee-container {
            position: absolute;
            width: 97vw;
            height: 100px;
            display: flex;
            overflow: hidden;
            z-index: 10;
          }
          
          .marquee-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            font-size: 2.5rem;
            padding: 0 2rem;
            width: 200%;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          
          .marquee-pink {
            background: linear-gradient(135deg, #C71585, #DA70D6, #FF00FF, #C71585);
            background-size: 300% 300%;
            animation: gradientShift 8s ease infinite;
            color: #F8F8FF;
            font-weight: bold;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 15px rgba(199, 21, 133, 0.4);
          }

          .marquee-purple {
            background: linear-gradient(135deg, #4B0082, #8A2BE2, #9932CC, #4B0082);
            background-size: 300% 300%;
            animation: gradientShift 6s ease infinite;
            color: #E6E6FA;
            font-weight: bold;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 15px rgba(75, 0, 130, 0.4);
          }

          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .intersection-glow {
            position: absolute;
            width: 100%;
            height: 200px;
            background: radial-gradient(ellipse at center, 
              rgba(255, 0, 255, 0.15) 0%, 
              rgba(138, 43, 226, 0.1) 30%, 
              transparent 70%);
            pointer-events: none;
            z-index: 5;
          }
          
          /* Mobile - Extra Small */
          @media (max-width: 480px) {
            .marquee-container {
              height: 80px;
              width: 100vw;
            }
            .marquee-content {
              font-size: 2rem;
              padding: 0 0.5rem;
              letter-spacing: 0.02em;
            }
          }
          
          /* Mobile - Small */
          @media (min-width: 481px) and (max-width: 640px) {
            .marquee-container {
              height: 80px;
              width: 50vw;
            }
            .marquee-content {
              font-size: 2rem;
              padding: 0 0.75rem;
              letter-spacing: 0.03em;
            }
          }
          
          /* Tablet - Small */
          @media (min-width: 641px) and (max-width: 768px) {
            .marquee-container {
              height: 80px;
              width: 100vw;
            }
            .marquee-content {
              font-size: 2rem;
              padding: 0 1rem;
              letter-spacing: 0.04em;
            }
          }
          
          /* Tablet - Large */
          @media (min-width: 769px) and (max-width: 1024px) {
            .marquee-container {
              height: 80px;
              width: 100vw;
            }
            .marquee-content {
              font-size: 2rem;
              padding: 0 1.25rem;
              letter-spacing: 0.05em;
            }
          }
          
          /* Desktop - Small */
          @media (min-width: 1025px) and (max-width: 1280px) {
            .marquee-container {
              height: 120px;
              width: 100vw;
            }
            .marquee-content {
              font-size: 2rem;
              padding: 0 1.5rem;
              letter-spacing: 0.06em;
            }
          }
          
          /* Desktop - Large */
          @media (min-width: 1281px) {
            .marquee-container {
              height: 120px;
              width: 100vw;
            }
            .marquee-content {
              font-size: 2.5rem;
              padding: 0 2rem;
              letter-spacing: 0.08em;
            }
          }
        `}
      </style>

      {/* Premier marquee - Purple - incliné à 3 degrés */}
      <div
        className="marquee-container"
        style={{
          left: "0",
          transform: "rotate(3deg)",
        }}
      >
        <div className="marquee-purple flex items-center w-full h-full">
          <div ref={marqueeRef} className="marquee-content">
            {marqueeContent1}
            {marqueeContent1}
            {marqueeContent1}
          </div>
        </div>
      </div>

      {/* Deuxième marquee - Pink - incliné à -3 degrés */}
      <div
        className="marquee-container"
        style={{
          left: "0",
          transform: "rotate(-3deg)",
        }}
      >
        <div className="marquee-pink flex items-center w-full h-full">
          <div ref={marqueeRef2} className="marquee-content">
            {marqueeContent2}
            {marqueeContent2}
            {marqueeContent2}
          </div>
        </div>
      </div>

      <div className="intersection-glow"></div>
    </>
  )
}

export default Marquee