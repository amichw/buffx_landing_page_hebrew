import React from 'react';
const imgGoogleForStartupsLogoSvg1 = "/assets/figma/7ed9d2c9656a71a86120344164b10d136ddf8e19.png";
const img1 = "/assets/figma/498ad49a85fc2e17c1492c2d526951817680ed52.png";
const imgLogo1 = "/assets/figma/09ca3e49270162fc466a93ebbf1bb7df288e1365.png";

export function TrustSection() {
  return (
    <section 
      id="trust"
      className="py-20 relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, #ffffff 0%, #F0F0FA 100%)'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background blur effects */}
        <div 
          className="absolute blur-[64px] left-[425px] opacity-20 rounded-full size-[384px] top-[40px] pointer-events-none" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 384 384\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -27.153 -27.153 0 192 192)\\'><stop stop-color=\\'rgba(185,254,224,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(139,191,168,0.75)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(93,127,112,0.5)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(46,64,56,0.25)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" 
          }} 
        />
        <div 
          className="absolute blur-[64px] right-[200px] opacity-20 rounded-full size-[384px] bottom-0 pointer-events-none" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 384 384\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -27.153 -27.153 0 192 192)\\'><stop stop-color=\\'rgba(5,251,144,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(4,188,108,0.75)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(3,126,72,0.5)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(1,63,36,0.25)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" 
          }} 
        />

        {/* Title with Logo */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-2">
            <h2 
              className="font-['Heebo:Bold',sans-serif] font-bold text-4xl leading-tight text-[#0f172a] md:text-[56px] whitespace-nowrap"
            >
              הסיפור מאחורי
            </h2>
            {/* Logo - BUFF then X */}
            <a href="https://buffx.ai" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="relative ml-[-5px] h-[48px] w-[48px] md:h-[65.551px] md:w-[65.551px]">
                <img
                  alt="Buffx Logo"
                  className="absolute inset-0 object-cover pointer-events-none size-full"
                  src={imgLogo1}
                />
              </div>
              <p className="font-['Viga:Regular',sans-serif] text-4xl leading-none text-[#0F172A] md:text-[51.615px]">BUFF</p>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Card */}
          <div className="flex-shrink-0">
            <div 
              className="w-full max-w-[493px] overflow-hidden rounded-[24px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.1)] aspect-video"
            >
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="הסיפור מאחורי Buffx"
              >
                <source src="/assets/team_vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-[558px]">
            <div className="flex flex-col gap-6 items-end text-right">
              {/* Main Text */}
              <p 
                className="font-['Arial:Regular',sans-serif] leading-[26px] text-[#0f172a] text-[16px]"
                dir="rtl"
              >Buffx נולדה מתוך היכרות עמוקה עם שני העולמות: עשר שנות ניסיון בניהול פיננסי, והבנה מהשטח של האתגרים שנשים מתמודדות איתם בגביית מזונות. הטכנולוגיה שלנו עושה את מה שאף אחד לא עשה עד היום - שמה את הכוח בידיים שלך.<span dir="ltr">Buffx</span>השתתפנו במחזור ו' (2026) של אקסלרטור פורום מיכל סלה בשיתוף Google for Startups<br /><br /></p>

              {/* Partner Logos */}
              <div className="flex items-center gap-4 mt-4">
                {/* Google for Startups */}
                <div 
                  className="bg-white flex items-center justify-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] h-[40px] px-4"
                >
                  <img 
                    alt="Google for Startups" 
                    className="h-[14px] w-auto" 
                    src={imgGoogleForStartupsLogoSvg1} 
                  />
                </div>

                {/* Michal Sela Forum */}
                <div 
                  className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center gap-3 h-[40px] px-4"
                  style={{ 
                    backgroundImage: "linear-gradient(166.908deg, rgb(5, 251, 144) 0%, rgb(185, 254, 224) 100%)" 
                  }}
                >
                  <p 
                    className="font-['Arial:Bold',sans-serif] text-[12px] leading-[16px] text-[#0f172a] whitespace-nowrap"
                    dir="rtl"
                  >
                    פורום מיכל סלה
                  </p>
                  <div className="w-[61px] h-[28px]">
                    <img 
                      alt="פורום מיכל סלה" 
                      className="w-full h-full object-cover" 
                      src={img1} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
