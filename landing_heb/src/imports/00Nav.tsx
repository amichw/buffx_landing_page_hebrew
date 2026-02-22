import svgPaths from "./svg-180pj9vue5";
import imgLogo1 from "figma:asset/09ca3e49270162fc466a93ebbf1bb7df288e1365.png";
type NavTextTextProps = {
  text: string;
};

function NavTextText({ text }: NavTextTextProps) {
  return (
    <div style={{ fontVariationSettings: "\'opsz\' 14" }} className="flex flex-col font-['DM_Sans:SemiBold','Arimo:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-right text-white whitespace-nowrap">
      <p className="leading-[normal]" dir="auto">
        {text}
      </p>
    </div>
  );
}

export default function Component00Nav() {
  return (
    <div className="relative size-full" data-name="00_Nav">
      <div className="absolute bg-[#0f172a] content-stretch flex gap-[198px] h-[90px] items-center left-0 pl-[158px] pr-[164px] py-[18px] top-0 w-[1921px]" data-name="Nav">
        <div className="content-stretch flex gap-[10px] h-[54px] items-center justify-center px-[28px] relative shrink-0 w-[190px]" data-name="NEW_BTN">
          <div className="absolute inset-[-60.56%_-17.21%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.4 119.4">
              <g filter="url(#filter0_di_2007_4199)" id="Rectangle 20">
                <path d={svgPaths.p39efb480} fill="var(--fill-0, #05FB90)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="119.4" id="filter0_di_2007_4199" width="255.4" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="16.35" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.984314 0 0 0 0 0.596078 0 0 0 0.15 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2007_4199" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2007_4199" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="15" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                  <feBlend in2="shape" mode="normal" result="effect2_innerShadow_2007_4199" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col font-['Noto_Sans_Arabic:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold h-[53.96px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[19px] text-center tracking-[-0.23px] w-[134px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[20px] whitespace-pre-wrap" dir="auto">
              הרשמה לבטא
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[81px] items-center relative shrink-0" data-name="Nav_text">
          <NavTextText text="הצטרפי לבטא" />
          <NavTextText text="שאלות ותשובות" />
          <NavTextText text="למה לסמוך עלינו" />
          <NavTextText text="איך זה עובד" />
          <NavTextText text="מכירה את זה?" />
          <div className="h-[54px] relative shrink-0 w-[152.148px]">
            <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Logo">
              <p className="font-['Viga:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40.274px] text-right text-white">BUFF</p>
              <div className="relative shrink-0 size-[51.148px]" data-name="logo 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}