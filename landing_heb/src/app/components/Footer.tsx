import React from 'react';
import { Shield } from 'lucide-react';
import imgLogo1 from "figma:asset/09ca3e49270162fc466a93ebbf1bb7df288e1365.png";

export function Footer() {
  return (
    <footer 
      className="py-12"
      style={{ 
        backgroundColor: '#0F172A'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4 relative h-12">
          <div className="relative w-[51px] h-[51px] ml-[-5px]">
            <img 
              alt="Buffx Logo" 
              className="absolute inset-0 object-cover pointer-events-none size-full" 
              src={imgLogo1} 
            />
          </div>
          <p className="font-['Viga:Regular',sans-serif] text-[40px] leading-none text-white">BUFF</p>
        </div>
        
        <p className="mb-8 text-lg" style={{ color: '#B9FEE0' }}>
          הסוכנת שלך שעושה את העבודה במקומך
        </p>
        
        {/* Contact Us */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2" style={{ color: '#05FB90' }}>
            צור קשר
          </h3>
          <a 
            href="mailto:info@buffx.ai" 
            className="text-white hover:text-[#05FB90] transition-colors"
          >
            info@buffx.ai
          </a>
        </div>
        
        <p className="text-sm mb-6" style={{ color: '#ffffff', opacity: 0.5 }}>
          © 2026 Buffx. כל הזכויות שמורות.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-sm font-medium">
          <a href="#" className="transition-colors hover:text-[#05FB90]" style={{ color: '#B9FEE0' }}>תנאי שימוש</a>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#05FB90' }} />
          <a href="#" className="transition-colors hover:text-[#05FB90]" style={{ color: '#B9FEE0' }}>מדיניות פרטיות</a>
        </div>
      </div>
    </footer>
  );
}