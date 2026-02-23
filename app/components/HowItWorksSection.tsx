"use client";

import React, { useEffect, useRef, useState } from 'react';
import Container1 from '../imports/Container-2001-18';
import Container2 from '../imports/Container-2001-61';
import Container3 from '../imports/Container-2001-41';
import Container4 from '../imports/Container-2001-88';

const BASE_CARD_WIDTH = 680;
const BASE_CARD_HEIGHT = 420;

function ResponsiveStepCard({ children }: { children: React.ReactNode }) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!frameRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const nextScale = Math.min(1, entry.contentRect.width / BASE_CARD_WIDTH);
      setScale(nextScale);
    });

    observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="relative w-full" style={{ height: `${BASE_CARD_HEIGHT * scale}px` }}>
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: `${BASE_CARD_WIDTH}px`,
          height: `${BASE_CARD_HEIGHT}px`,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section 
      id="how-it-works"
      className="py-24 relative overflow-hidden" 
      style={{ 
        backgroundColor: '#0F172A'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-5xl"
            style={{ 
              color: '#ffffff',
              fontWeight: 800
            }}
          >מפסק דין לכסף בחשבון</h2>
          <p 
            className="text-xl"
            style={{ 
              color: '#B9FEE0'
            }}
          >
            ארבעה צעדים לגבייה בלי כאב ראש
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <ResponsiveStepCard>
            <Container1 />
          </ResponsiveStepCard>
          <ResponsiveStepCard>
            <Container2 />
          </ResponsiveStepCard>
          <ResponsiveStepCard>
            <Container3 />
          </ResponsiveStepCard>
          <ResponsiveStepCard>
            <Container4 />
          </ResponsiveStepCard>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#waitlist-form"
            className="inline-block px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
              color: '#0F172A',
              boxShadow: '0 10px 40px rgba(5, 251, 144, 0.3)'
            }}
          >
            רוצה לראות כמה מגיע לך? התחילי עכשיו
          </a>
        </div>
      </div>
    </section>
  );
}
