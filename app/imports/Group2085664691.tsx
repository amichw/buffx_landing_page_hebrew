import svgPaths from "./svg-y0tjucyt64";
const imgShadow = "/assets/figma/562dfad9144db2e5080566b92ca28c9f1491bfbf.png";
const imgNotificationsMockup21 = "/assets/figma/519000e58636ff0dffd19fcad73dccb88755e605.png";

function Container() {
  return null; // Removed green gradient
}

function Container1() {
  return null; // Removed green gradient
}

function Container4() {
  return <div className="bg-[#05fb90] opacity-94 rounded-[41447216px] shrink-0 size-[9.264px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[27.793px] relative shrink-0 w-[250.924px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[27.793px] not-italic text-white text-[18.528px] text-right text-[#05fb90]" dir="auto">המערכת החכמה לגביית מזונות</p>
    </div>
  );
}

function Container3() {
  return null; // Removed button
}

function Text1() {
  return <div className="absolute h-[92.642px] left-[193.93px] top-0 w-[207.035px]" data-name="Text" />;
}

function Icon() {
  return (
    <div className="absolute h-[13.896px] left-[262.41px] top-[81.21px] w-[207.035px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 207.035 13.8963">
        <g id="Icon">
          <path d={svgPaths.p2fb9e100} id="Vector" stroke="var(--stroke-0, #05FB90)" strokeLinecap="round" strokeWidth="2.07035" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return null; // Removed heading
}

function Heading1() {
  return null; // Removed subheading
}

function Button() {
  return (
    <div 
      className="absolute content-stretch flex flex-col items-center justify-center left-[707.41px] px-[58px] py-[18px] rounded-[41447216px] shadow-[0px_23.16px_49.1px_0px_rgba(5,251,144,0.3)] top-[447px] w-[451px] cursor-pointer transition-all hover:shadow-[0px_23.16px_49.1px_0px_rgba(5,251,144,0.5)] border border-transparent hover:border-[#05fb90]" 
      data-name="Button" 
      style={{ backgroundImage: "linear-gradient(120.959deg, rgb(5, 251, 144) 41.43%, rgb(185, 254, 224) 94.857%)" }}
      onClick={() => {
        const form = document.getElementById('waitlist-form');
        form?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <div className="content-stretch flex h-[33px] items-center justify-center relative shrink-0 w-full">
        <p className="font-['Heebo:Bold',sans-serif] font-bold leading-[32.425px] relative shrink-0 text-[#0f172a] text-[20.844px] text-center" dir="auto">
          אני רוצה שקט נפשי - הצטרפות לבטא
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <p className="font-['Arial:Regular',sans-serif] h-[26px] leading-[27.793px] not-italic relative shrink-0 text-[#0f172a] text-[19px] text-right w-[414px] whitespace-pre-wrap" dir="auto">
      דיסקרטיות מלאה | הצפנת נתונים בסטנדרט מחמיר
    </p>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Icon">
          <path d={svgPaths.p2c5fecf0} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54403" />
          <path d={svgPaths.p13cdf740} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54403" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-end left-[703.41px] top-[552.85px]" dir="rtl">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[484.053px] left-[441.59px] top-[118.12px] w-[1037.588px]" data-name="Container" style={{ background: '#FFFFFF' }}>
      <Container3 />
      <Heading />
      <Heading1 />
      <Button />
      <Container5 />
    </div>
  );
}

function MockUp() {
  return null; // Removed phone mockup
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Container />
      <Container1 />
      <Container2 />
      <MockUp />
    </div>
  );
}