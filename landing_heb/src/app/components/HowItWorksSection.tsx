import React from 'react';
import Container1 from '../../imports/Container-2001-18';
import Container2 from '../../imports/Container-2001-61';
import Container3 from '../../imports/Container-2001-41';
import Container4 from '../../imports/Container-2001-88';

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
        
        <div className="grid md:grid-cols-2 gap-8">
          <div style={{ height: '420px' }}>
            <Container1 />
          </div>
          <div style={{ height: '420px' }}>
            <Container2 />
          </div>
          <div style={{ height: '420px' }}>
            <Container3 />
          </div>
          <div style={{ height: '420px' }}>
            <Container4 />
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#waitlist"
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