"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'כמה זה עולה?',
      answer: 'חינם ל-50 הנרשמות הראשונות לבטא. בהמשך השירות יעלה בעלות חודשית.'
    },
    {
      question: 'איך הוא מקבל את הדרישה? זה נראה כאילו אני שלחתי הודעה?',
      answer: 'לא. הוא מקבל הודעה רשמית ומקצועית מ-Buffex עם פירוט החיוב ולינק לתשלום. זה מנטרל את הרגש והופך את זה לעניין טכני בלבד.'
    },
    {
      question: 'מה קורה אם הוא לא משלם אחרי הדרישה?',
      answer: 'המערכת מתעדת כל דרישה ותשלום. אם הוא לא משתף פעולה, יש לך תיק מסודר ומוכן לפתיחת הליך בהוצאה לפועל.'
    },
    {
      question: 'המזונות שלי צמודים למדד. המערכת יודעת לחשב את זה?',
      answer: 'כן. המערכת מחשבת הצמדה אוטומטית לפי מדד המחירים לצרכן, כולל עדכונים שוטפים.'
    },
    {
      question: 'הוא רואה את הקבלות שאני מעלה?',
      answer: 'הוא רואה רק את הסכום ואת הקטגוריה (למשל: "הוצאות רפואיות - 350 ₪"). הוא לא רואה את הקבלה עצמה או פרטים אישיים שלך.'
    },
    {
      question: 'האם המידע שלי בטוח?',
      answer: 'לחלוטין. המערכת מאובטחת בסטנדרט מחמיר, המידע מוצפן, ואף אחד מלבדך לא יכול לגשת לנתונים שלך.'
    },
    {
      question: 'צריך עורך דין?',
      answer: 'לא לשלב הגבייה. המערכת מנהלת את הדרישות והתיעוד בעצמה. אם תצטרכי ייצוג משפטי בהמשך, נפנה אותך לגורם מתאים.'
    },
    {
      question: 'איך מתחילים?',
      answer: 'נרשמת לבטא ← מעלה את פסק הדין או הסכם הגירושין ← המערכת סורקת ומזהה מה מגיע לך ← מתחילה לעבוד בשבילך.'
    }
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-5xl"
            style={{ 
              color: '#0F172A',
              fontWeight: 800
            }}
          >
            שאלות ותשובות
          </h2>
          <p className="text-xl" style={{ color: '#0F172A', opacity: 0.6 }}>
            כל מה שרצית לדעת על Buffx
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: '#F0F0FA',
                border: '1px solid #F0F0FA'
              }}
            >
              <button
                className="w-full p-5 text-right flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 
                  className="text-lg text-right flex-1"
                  style={{ 
                    color: '#0F172A',
                    fontWeight: 600
                  }}
                >
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  style={{ 
                    color: '#0F172A',
                    transition: 'transform 0.3s',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
              
              {openIndex === index && (
                <div 
                  className="px-5 pb-5 text-right"
                  style={{ color: '#0F172A', opacity: 0.7 }}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
