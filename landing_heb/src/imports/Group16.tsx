import imgLogo1 from "figma:asset/09ca3e49270162fc466a93ebbf1bb7df288e1365.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <p className="-translate-x-full absolute font-['Viga:Regular',sans-serif] leading-[normal] left-[251px] not-italic text-[100px] text-right text-white top-0">BUFF</p>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute left-[238px] size-[127px] top-[4px]" data-name="logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}