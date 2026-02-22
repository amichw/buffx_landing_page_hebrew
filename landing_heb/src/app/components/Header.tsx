import React from 'react';
import imgLogo1 from "figma:asset/09ca3e49270162fc466a93ebbf1bb7df288e1365.png";

export function Header() {
  return (
    <header 
      className="w-full z-50" 
      style={{ 
        backgroundColor: '#0F172A',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center relative h-12">
            <div className="relative w-[51px] h-[51px] ml-[-5px]">
              <img 
                alt="Buffx Logo" 
                className="absolute inset-0 object-cover pointer-events-none size-full" 
                src={imgLogo1} 
              />
            </div>
            <p className="font-['Viga:Regular',sans-serif] text-[40px] leading-none text-[#ffffff]">BUFF</p>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#pain" 
              className="text-[#ffffff] hover:text-[#05FB90] transition-colors cursor-pointer font-medium"
            >
              מכירה את זה?
            </a>
            <a 
              href="#how-it-works" 
              className="text-[#ffffff] hover:text-[#05FB90] transition-colors cursor-pointer font-medium"
            >
              איך זה עובד
            </a>
            <a 
              href="#trust" 
              className="text-[#ffffff] hover:text-[#05FB90] transition-colors cursor-pointer font-medium"
            >
              למה לסמוך עלינו
            </a>
            <a 
              href="#faq" 
              className="text-[#ffffff] hover:text-[#05FB90] transition-colors cursor-pointer font-medium"
            >
              שאלות ותשובות
            </a>
          </nav>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 rounded-full font-bold transition-all hover:scale-105 relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
              color: '#0F172A',
              boxShadow: '0 10px 30px rgba(5, 251, 144, 0.3)'
            }}
            onClick={() => {
              const form = document.getElementById('waitlist-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">הצטרפי לבטא</span>
            
            {/* Hover gradient effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)'
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}