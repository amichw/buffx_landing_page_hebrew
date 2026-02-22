import svgPaths from "./svg-tvftea30jr";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[14px] items-end left-0 top-0 w-[558px]">
        <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(5, 251, 144) 0%, rgb(185, 254, 224) 100%)" }}>
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.pcedbe00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p33b6ac00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Arial:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0f172a] text-[16px] text-right w-[min-content] whitespace-pre-wrap" dir="rtl">
          Buffx נולדה מתוך היכרות עמוקה עם שני העולמות: עשר שנות ניסיון בניהול פיננסי, והבנה מהשטח של האתגרים שנשים מתמודדות איתם בגביית מזונות. הטכנולוגיה שלנו עושה את מה שאף אחד לא עשה עד היום - שמה את הכוח בידיים שלך.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          השתתפנו במחזור ו’ של אקסלרטור פורום מיכל סלה בשיתוף Google for Startups
        </p>
      </div>
    </div>
  );
}