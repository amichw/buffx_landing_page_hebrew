import Image from "next/image";
import { Lock } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f7f8] pb-16 pt-8 md:pb-20 md:pt-12"
      style={{ minHeight: "640px" }}
    >
      <div dir="ltr" className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 md:px-8 lg:grid-cols-[460px_1fr] lg:items-center lg:gap-8">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto h-[500px] w-[300px] sm:h-[620px] sm:w-[380px] md:h-[700px] md:w-[430px]">
            <div className="absolute inset-x-0 bottom-6 top-[90px] rounded-[56px] bg-[#d6f8ea]" />
            <div className="absolute -bottom-3 left-1/2 h-[120px] w-[320px] -translate-x-1/2 opacity-60 sm:w-[420px]">
              <Image
                src="/assets/figma/562dfad9144db2e5080566b92ca28c9f1491bfbf.png"
                alt=""
                fill
                sizes="(max-width: 768px) 320px, 420px"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-0 h-[470px] w-[270px] -translate-x-1/2 rotate-[12deg] sm:h-[590px] sm:w-[340px] md:h-[680px] md:w-[390px]">
              <Image
                src="/assets/figma/519000e58636ff0dffd19fcad73dccb88755e605.png"
                alt="Buffx mobile app"
                fill
                sizes="(max-width: 640px) 270px, (max-width: 768px) 340px, 390px"
                className="object-contain scale-x-[-1]"
                priority
              />
            </div>
          </div>

          <div dir="rtl" className="mt-2 flex flex-col items-end lg:hidden">
            <a
              href="#waitlist-form"
              className="inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-center font-['Heebo',sans-serif] text-[1.25rem] font-bold text-[#0f172a] shadow-[0px_22px_48px_0px_rgba(5,251,144,0.35)] sm:w-auto sm:min-w-[460px]"
              style={{
                backgroundImage: "linear-gradient(120deg, #05fb90 35%, #b9fee0 100%)",
              }}
            >
              אני רוצה שקט נפשי - הצטרפות לבטא
            </a>

            <div className="mt-7 flex items-center gap-2 text-[#0f172a]">
              <Lock className="h-5 w-5" />
              <p className="font-['Arial',sans-serif] text-lg text-[#0f172a]">
                דיסקרטיות מלאה | הצפנת נתונים בסטנדרט מחמיר
              </p>
            </div>
          </div>
        </div>

        <div dir="rtl" className="order-1 text-right lg:order-2">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#0b1536] px-6 py-3 text-[#10f6a2] md:px-8">
            <span className="h-2.5 w-2.5 rounded-full bg-[#10f6a2]" />
            <span className="font-['Heebo',sans-serif] text-base font-medium">המערכת החכמה לגביית מזונות</span>
          </div>

          <h1 className="mb-6 font-['Heebo',sans-serif] text-[2.35rem] font-black leading-[1.12] text-[#0b1536] sm:text-[3rem] md:text-[4.5rem]">
            <span className="bg-gradient-to-l from-[#08ec91] to-[#9ef8d7] bg-clip-text text-transparent">הסוף למרדף</span>{" "}
            <span className="relative inline-block">
              אחרי המזונות
              <span className="absolute -bottom-1 right-0 h-[3px] w-full rounded-full bg-[#08ec91]" />
            </span>
            <span className="mt-1 block">ומחצית ההוצאות</span>
          </h1>

          <p className="mb-9 max-w-3xl font-['Arial',sans-serif] text-[1.15rem] leading-[1.7] text-[#5a6476] md:text-[2rem] md:leading-[1.45]">
            הטכנולוגיה שלנו דואגת שתקבלי את הכסף, הוא מקבל דרישת תשלום מסודרת נשלחת אליו אוטומטית. בלי שיחות, בלי מריבות, בלי תזכורות.
          </p>

          <div className="hidden lg:flex lg:flex-col lg:items-end">
            <a
              href="#waitlist-form"
              className="inline-flex w-full items-center justify-center rounded-full px-8 py-4 font-['Heebo',sans-serif] text-[1.4rem] font-bold text-[#0f172a] shadow-[0px_22px_48px_0px_rgba(5,251,144,0.35)] sm:w-auto sm:min-w-[460px]"
              style={{
                backgroundImage: "linear-gradient(120deg, #05fb90 35%, #b9fee0 100%)",
              }}
            >
              אני רוצה שקט נפשי - הצטרפות לבטא
            </a>

            <div className="mt-7 flex items-center gap-2 text-[#0f172a]">
              <Lock className="h-5 w-5" />
              <p className="font-['Arial',sans-serif] text-lg text-[#0f172a]">
                דיסקרטיות מלאה | הצפנת נתונים בסטנדרט מחמיר
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
