import React from 'react';
import { MessageCircleOff, Calculator, Zap, FolderCheck } from 'lucide-react';

export function PainSection() {
  const features = [
    {
      icon: MessageCircleOff,
      title: 'בלי שיחות מביכות',
      subtitle: 'כל התקשורת עוברת דרך המערכת',
      gradient: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)'
    },
    {
      icon: Calculator,
      title: 'החישוב אוטומטי',
      subtitle: 'הצמדה למדד, חלוקת הוצאות, הכל מחושב',
      gradient: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)'
    },
    {
      icon: Zap,
      title: 'דרישה יוצאת מיד',
      subtitle: 'תשלום רשמי ומתועד נשלח אליו',
      gradient: 'linear-gradient(135deg, #B9FEE0 30%, #05FB90 100%)'
    },
    {
      icon: FolderCheck,
      title: 'תיעוד מלא',
      subtitle: 'כל דרישה נשמרת, מוכן להוצאה לפועל',
      gradient: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)'
    }
  ];

  return (
    <section 
      id="pain"
      className="py-24 relative overflow-hidden" 
      style={{ 
        background: '#ffffff'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 
            className="mb-4 leading-tight"
            style={{ 
              fontSize: '3.5rem',
              fontWeight: 800,
              color: '#0F172A'
            }}
          >
            למה לרדוף אחרי הכל לבד?
          </h2>
          
          <p 
            className="max-w-4xl mx-auto text-lg leading-relaxed"
            style={{ 
              color: '#0F172A',
              opacity: 0.7
            }}
          >
            את לא צריכה להיות רואת חשבון וגם לא עורכת דין. את רק צריכה שהכסף יכנס בזמן. במקום לשלוח וואטסאפים, לריב על "מחציות", לחשב הצמדות ולשמוע תירוצים - תני לטכנולוגיה שלנו להיות החיץ (Buffer) ביניכם.
          </p>
        </div>
        
        {/* Four cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-right group relative overflow-hidden transition-all hover:scale-105"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 40px rgba(5, 251, 144, 0.15)',
                border: '1px solid #F0F0FA'
              }}
            >
              <div 
                className="inline-flex p-3 rounded-xl mb-4 transition-all group-hover:scale-110"
                style={{ 
                  background: feature.gradient,
                  boxShadow: '0 10px 30px rgba(5, 251, 144, 0.2)'
                }}
              >
                <feature.icon size={28} style={{ color: '#0F172A' }} />
              </div>
              
              <h3 
                className="mb-2 text-lg"
                style={{ 
                  color: '#0F172A',
                  fontWeight: 700
                }}
              >
                {feature.title}
              </h3>
              
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#0F172A', opacity: 0.7 }}
              >
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}