const imgGoogleForStartupsLogoSvg1 = "/assets/figma/7ed9d2c9656a71a86120344164b10d136ddf8e19.png";
const img1 = "/assets/figma/498ad49a85fc2e17c1492c2d526951817680ed52.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white content-stretch flex h-[40px] items-center justify-center left-[180px] pl-[16px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[167px]" data-name="BTN">
        <div className="h-[14px] relative shrink-0 w-[114px]" data-name="Google_for_Startups_logo.svg 1">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoogleForStartupsLogoSvg1} />
        </div>
      </div>
      <div className="absolute h-[40px] left-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[172px]" data-name="Container" style={{ backgroundImage: "linear-gradient(166.908deg, rgb(5, 251, 144) 0%, rgb(185, 254, 224) 100%)" }}>
        <p className="-translate-x-full absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[159px] not-italic text-[#0f172a] text-[12px] text-right top-[11px]" dir="auto">
          פורום מיכל סלה
        </p>
        <div className="absolute h-[28px] left-[13px] top-[5px] w-[61px]" data-name="פורום מיכל סלה לוגו 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
        </div>
      </div>
    </div>
  );
}