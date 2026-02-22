import imgLogo1 from "figma:asset/09ca3e49270162fc466a93ebbf1bb7df288e1365.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <p className="-translate-x-1/2 absolute font-['Arial:Black','Arimo:Bold',sans-serif] leading-[70px] left-[397.49px] text-[#0f172a] text-[56px] text-center top-0" dir="auto" style={{ fontVariationSettings: "\'wght\' 700" }}>
        הסיפור מאחורי
      </p>
      <div className="absolute h-[69.207px] left-0 top-[3px] w-[194.993px]">
        <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Logo">
          <p className="font-['Viga:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[51.615px] text-right">BUFF</p>
          <div className="relative shrink-0 size-[65.551px]" data-name="logo 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
          </div>
        </div>
      </div>
    </div>
  );
}